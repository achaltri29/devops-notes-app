# DevOps Notes App

A full-stack cloud-native Notes application built using React, FastAPI, Docker, and AWS services.

---

# Live Demo

- Frontend: https://main.d10xdct8i2q6t9.amplifyapp.com/
- API Gateway Endpoint: https://a8tjwb5jf9.execute-api.ap-south-1.amazonaws.com/prod/notes

---

# Architecture

## Frontend
- React + Vite
- Hosted on AWS Amplify
- Connected to backend using AWS API Gateway

## Backend
- FastAPI
- Dockerized backend service
- Deployed on AWS Lambda

## API Layer
- AWS API Gateway
- Lambda proxy integration
- API Key authentication
- CORS enabled

## Database
- Amazon DynamoDB

---

# Cloud Services Used

- AWS Lambda
- AWS API Gateway
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
- API Gateway secured backend
- Automatic frontend deployment using Amplify CI/CD

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
│   ├── .env.local
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yaml
└── README.md
```

---

# Application Flow

```text
React Frontend (Amplify)
        ↓
AWS API Gateway
        ↓
AWS Lambda (FastAPI + Docker)
        ↓
Amazon DynamoDB
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

Frontend:

```text
http://localhost:5173
```

Backend:

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

Create `.env.local`

```env
VITE_API_URL=https://a8tjwb5jf9.execute-api.ap-south-1.amazonaws.com/prod
VITE_API_KEY=YOUR_API_KEY
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

Base URL:

```text
https://a8tjwb5jf9.execute-api.ap-south-1.amazonaws.com/prod
```

Get all notes:

```http
GET /notes
```

Create note:

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

Update note:

```http
PUT /notes/{note_id}
```

Delete note:

```http
DELETE /notes/{note_id}
```

---

# AWS Deployment

## Backend Deployment

Backend deployed using:
- Docker container
- AWS Lambda
- API Gateway integration
- DynamoDB integration

## API Gateway Configuration

- REST API using AWS API Gateway
- Lambda proxy integration enabled
- API Key authentication enabled
- CORS configured for frontend access
- Stage deployed as `prod`

## Frontend Deployment

Frontend deployed using:
- AWS Amplify
- GitHub integration
- Automatic CI/CD deployment

---

# Backend Environment Variables

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
- AWS API Gateway
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
- Custom domain configuration
- Rate limiting and request throttling

---

# Author

Achal Tripathi
