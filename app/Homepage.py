import streamlit as st

st.set_page_config(
    page_title="Edison Wang",
    page_icon="🔐",
)

spacer, pfp_col, spacer = st.columns([2, 1.6, 2])
pfp_col.image("app/assets/pfp.jpeg", width="stretch")
st.title("Edison (Eddie) Wang", )
st.divider()

link1, link2, link3, spacer = st.columns([1.09, 1, 1, 3])
link1.link_button("My LinkedIn", "https://www.linkedin.com/in/edison-wang-s7z7g7/")
link2.link_button("My GitHub", "https://github.com/Syzygicality")
link3.link_button("Recursion", "https://edisonwang.dev/")

st.header("*Welcome to my personal website!*")