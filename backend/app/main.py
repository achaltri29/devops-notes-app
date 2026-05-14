from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum
from pydantic import BaseModel
import boto3
import uuid
import os


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# DynamoDB table name from environment variable
table_name = os.environ.get("NOTES_TABLE", "NotesTable")


# DynamoDB connection
dynamodb = boto3.resource(
    "dynamodb",
    region_name="ap-south-1"
)

table = dynamodb.Table(table_name)


# Request body schema
class Note(BaseModel):
    title: str
    content: str


@app.get("/")
def root():
    return {
        "message": "DevOps Notes API is running"
    }


# CREATE NOTE
@app.post("/notes")
def create_note(note: Note):

    note_id = str(uuid.uuid4())

    item = {
        "id": note_id,
        "title": note.title,
        "content": note.content
    }

    table.put_item(Item=item)

    return {
        "message": "Note created successfully",
        "note": item
    }


# GET ALL NOTES
@app.get("/notes")
def get_notes():

    response = table.scan()

    return response.get("Items", [])


# GET SINGLE NOTE
@app.get("/notes/{note_id}")
def get_note(note_id: str):

    response = table.get_item(
        Key={"id": note_id}
    )

    item = response.get("Item")

    if not item:
        raise HTTPException(
            status_code=404,
            detail="Note not found"
        )

    return item


# UPDATE NOTE
@app.put("/notes/{note_id}")
def update_note(note_id: str, updated_note: Note):

    # Check if note exists
    existing_note = table.get_item(
        Key={"id": note_id}
    )

    if "Item" not in existing_note:
        raise HTTPException(
            status_code=404,
            detail="Note not found"
        )

    response = table.update_item(
        Key={"id": note_id},
        UpdateExpression="SET title = :title, content = :content",
        ExpressionAttributeValues={
            ":title": updated_note.title,
            ":content": updated_note.content
        },
        ReturnValues="ALL_NEW"
    )

    return {
        "message": "Note updated successfully",
        "updated_note": response.get("Attributes")
    }


# DELETE NOTE
@app.delete("/notes/{note_id}")
def delete_note(note_id: str):

    # Check if note exists
    existing_note = table.get_item(
        Key={"id": note_id}
    )

    if "Item" not in existing_note:
        raise HTTPException(
            status_code=404,
            detail="Note not found"
        )

    table.delete_item(
        Key={"id": note_id}
    )

    return {
        "message": "Note deleted successfully"
    }


# Lambda handler
handler = Mangum(app)