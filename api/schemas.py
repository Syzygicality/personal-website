from api.models import MessageType

from pydantic import BaseModel, EmailStr, Field, model_validator
from pydantic_extra_types.phone_numbers import PhoneNumber
from typing import Optional, List, Self
from uuid import UUID
from datetime import datetime

class CreateMessageSchema(BaseModel):
    message_type: MessageType
    name: Optional[str] = Field(max_length=100, default="Anonymous")
    message: str = Field(max_length=400)
    contact_email: Optional[EmailStr] = Field(default=None)
    contact_number: Optional[PhoneNumber] = Field(default=None)

    @model_validator(mode="before")
    @classmethod
    def clean_contact_email(cls, data):
        if "contact_email" in data and data["contact_email"]:
            data["contact_email"] = data["contact_email"].strip().lower()
        return data
    
    @model_validator(mode="before")
    @classmethod
    def strip_name(cls, data):
        if "name" in data and data["name"]:
            data["name"] = data["name"].strip()
        return data

    @model_validator(mode="after")
    def name_check(self) -> Self:
        if " " in self.username:
            raise ValueError("Username given cannot contain spaces.")
        return self

class MessageSchema(BaseModel):
    message_id: UUID
    name: Optional[str]
    message: str
    creation_date: datetime

class ListMessageSchema(BaseModel):
    messages: List[MessageSchema]

class CreateAnswerSchema(BaseModel):
    message_id: UUID
    answer: str

    @model_validator(mode="before")
    @classmethod
    def strip_answer(cls, data):
        if "answer" in data and data["answer"]:
            data["answer"] = data["answer"].strip()
        return data

class AnswerSchema(BaseModel):
    answer_id: UUID
    message: MessageSchema
    answer: str
    creation_date: datetime

class ListAnswerSchema(BaseModel):
    answers: List[AnswerSchema]