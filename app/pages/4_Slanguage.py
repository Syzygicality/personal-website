import streamlit as st
from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

max_tokens = 300
client = OpenAI(api_key=os.getenv("API_KEY"))

to_normal_startup = f"""
you are a Gen Alpha brainrot 
translator. when given message, 
give meaning behind message
and origin of slang. account for
you token limit of {max_tokens}
"""

to_brainrot_startup = f"""
you are a Gen Alpha brainrot 
interpreter. when given message, 
give the same message, but using 
Gen Alpha brainrot. account for
you token limit of {max_tokens}
"""

st.title("Slanguage")
st.divider()

user = st.text_input("Input your brainrot!")
option = st.selectbox("Translation mode", ["Brainrot -> Normal", "Normal -> Brainrot"])
send = st.button("Send")



if send and user:
    placeholder = st.empty()
    partial_response = ""
    
    match option:
        case "Brainrot -> Normal":
            startup = to_normal_startup
        case "Normal -> Brainrot":
            startup = to_brainrot_startup
    stream = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[
            {"role": "system", "content": startup},
            {"role": "user", "content": user}
        ],
        temperature=0.3,
        max_tokens=max_tokens,
        stream=True,
    )

    for event in stream:
        delta = event.choices[0].delta
        if hasattr(delta, "content") and delta.content:
            partial_response += delta.content
            placeholder.write(partial_response)