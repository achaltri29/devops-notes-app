# DevOps Notes App

A full-stack cloud-native Notes application built using React, FastAPI, Docker, and AWS services.

---

# Architecture

Frontend:
- React + Vite
- Hosted on AWS Amplify

Backend:
- FastAPI
- Dockerized backend service
- Deployed on AWS Lambda

Database:
- Amazon DynamoDB

Cloud Services Used:
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