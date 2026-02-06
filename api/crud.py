from api.main import app
from api.models import MessageType, Message, Answer
from api.database import get_session
from api.schemas import (
    CreateMessageSchema,
    MessageSchema,
    ListMessageSchema,
    CreateAnswerSchema,
    AnswerSchema,
    ListAnswerSchema
)

from typing import List, Optional
from sqlmodel import select, update, Session
from fastapi import Depends
from uuid import UUID

@app.post("/messages")
def create_message(user_data: CreateMessageSchema, session: Session = Depends(get_session)):
    message = Message(
        message_type=user_data.message_type,
        name=user_data.name,
        message=user_data.message,
        contact_email=user_data.contact_email,
        contact_number=user_data.contact_number
    )
    session.add(message)
    session.commit()
    return {"detail": "Message successfully sent!"}

@app.get("/answers", response_model=ListAnswerSchema)
def list_answers(session: Session = Depends(get_session)) -> List[Answer]:
    return session.exec(select(Answer)).all()

@app.get("/answers/{answer_id}", response_model=AnswerSchema)
def retrieve_answer(answer_id: UUID, session: Session = Depends(get_session)) -> Answer:
    return session.get(Answer, answer_id)

@app.get("/messages/unread", response_model=ListMessageSchema)
def list_unread_messages(session: Session = Depends(get_session)):
    messages = session.exec(select(Answer).where(Message.is_unread == True)).all()
    session.exec(update(Message).where(Message.is_unread == True).values(is_unread=False))
    return messages