from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from fastapi import HTTPException
from pydantic import BaseModel
import json
import os


class LoginRequest(BaseModel):
  email: str
  password: str


def read_db() -> list:
  with open("database.json", "r", encoding="utf-8") as file:
    return json.load(file)

def write_db(data: list) -> None:
  with open("database.json", "w", encoding="utf-8") as file:
    json.dump(data, file, indent=4, ensure_ascii=False)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

users_db = read_db()
users_db = {user["email"]: user for user in users_db}

@app.get("/")
def home():
    return {"status": "working", "message": "Hello from Render!"}

@app.post('/login')
def check_user(credentials: LoginRequest):
  user = users_db.get(credentials.email)

  if user and user["password"] == credentials.password:
    return {
      "status": "success",
      "user": user,
      "session": {"access_token": "secret_token"}
    }

  raise HTTPException(
    status_code=401, detail="Неверное имя пользователя или пароль"
  )
