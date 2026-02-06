from sqlmodel import SQLModel, Field, Relationship
from uuid import uuid4, UUID
from pydantic import EmailStr
from pydantic_extra_types.phone_numbers import PhoneNumber
from typing import Optional
from datetime import datetime, timezone
from enum import Enum

def present() -> datetime:
    return datetime.now(timezone.utc)

class MessageType(str, Enum):
    AMA = "ama"
    CONTACT = "contact"

class Message(SQLModel, table=True):
    message_id: UUID = Field(default_factory=uuid4, primary_key=True)
    message_type: MessageType = Field()
    name: str = Field(max_length=100, default="Anonymous")
    message: str = Field(max_length=400)
    contact_email: Optional[EmailStr] = Field(default=None)
    contact_number: Optional[PhoneNumber] = Field(default=None)
    is_unread: bool = Field(default=True)
    creation_date: datetime = Field(default_factory=present)

    answer: Optional["Answer"] = Relationship(back_populates="message", sa_relationship_kwargs={"uselist": False})

class Answer(SQLModel, table=True):
    answer_id: UUID = Field(default_factory=uuid4, primary_key=True)
    message_id: UUID = Field(foreign_key="message.message_id", ondelete="CASCADE")
    answer: str = Field()
    creation_date: datetime = Field(default_factory=present)
    
    message: "Message" = Relationship(back_populates="answer")