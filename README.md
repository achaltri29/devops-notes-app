# DevOps Notes App

A full-stack cloud-native Notes application built using React, FastAPI, Docker, and AWS services.

## Live Demo

- [Frontend Link](https://main.d10xdct8i2q6t9.amplifyapp.com/)
- [Backend Link](https://qory572cv6kn3pcmory3irubzi0rzjze.lambda-url.ap-south-1.on.aws/)

---


# Architecture

## Frontend
- React + Vite
- Hosted on AWS Amplify

## Backend
- FastAPI
- Dockerized backend service
- Deployed on AWS Lambda

## Database
- Amazon DynamoDB

## Cloud Services Used
- AWS Lambda
- AWS Amplify
- Amazon DynamoDB
- AWS IAM
- Docker
- GitHub

---

# Features

- Create notes
- Read notes
- Update notes
- Delete notes
- Persistent storage using DynamoDB
- Fully deployed frontend and backend on AWS

---

# Project Structure

```bash
devops-notes-app/
│
├── backend/
│   ├── app/
│   │   └── main.py
│   ├── Dockerfile
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yaml
└── README.md
```

---

# Local Development Setup

## Prerequisites

- Docker Desktop
- Node.js
- Python
- AWS Account

---

# Run Using Docker

```bash
docker-compose up --build
```

## Frontend

```text
http://localhost:5173
```

## Backend

```text
http://localhost:8000
```

---

# Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build production files:

```bash
npm run build
```

---

# Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate virtual environment (Windows):

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run backend server:

```bash
uvicorn app.main:app --reload
```

---

# API Endpoints

## Get all notes

```http
GET /notes
```

---

## Create note

```http
POST /notes
```

Request body:

```json
{
  "title": "Sample Title",
  "content": "Sample Content"
}
```

---

## Update note

```http
PUT /notes/{note_id}
```

---

## Delete note

```http
DELETE /notes/{note_id}
```

---

# AWS Deployment

## Backend Deployment

Backend deployed using:
- Docker container
- AWS Lambda
- Function URL/API Gateway
- DynamoDB integration

---

## Frontend Deployment

Frontend deployed using:
- AWS Amplify
- GitHub integration
- Automatic CI/CD deployment

---

# Environment Variables

## Frontend

Create:

```text
frontend/.env
```

Add:

```env
VITE_API_URL=YOUR_BACKEND_URL
```

---

## Backend

```env
NOTES_TABLE=NotesTable
AWS_DEFAULT_REGION=ap-south-1
```

---

# Tech Stack

- React
- Vite
- FastAPI
- Docker
- AWS Lambda
- AWS Amplify
- DynamoDB
- GitHub

---

# Future Improvements

- Authentication using JWT or AWS Cognito
- CI/CD using GitHub Actions
- Terraform Infrastructure as Code
- CloudWatch monitoring
- ECS/Kubernetes deployment

---

# Author

Achal Tripathi
