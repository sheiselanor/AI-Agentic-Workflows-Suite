# 🤖 AI Agentic Workflows Suite – Conversational Automation with LLMs, Voice & Avatars

Welcome to the **AI Agentic Workflows Suite**, a fully modular collection of **n8n-based** automation workflows for intelligent customer interaction through **voice calls, WhatsApp chat, and avatar-based web coaching**.

Built with **real-world integrations** like **Twilio, Deepgram, DeepSeek, HeyGen, Airtable**, and **Google Calendar**, these workflows showcase how humanlike AI assistants can automate customer engagement, bookings, and content delivery.

---

## 📦 Tasks Overview

### 🔊 Task 1 – AI Voice Call Booking Assistant
- Inbound voice call trigger via **Twilio Studio Flow**
- **Deepgram** transcribes audio to text
- **DeepSeek LLM** extracts booking intent
- Event is booked in **Google Calendar**
- Logs stored in **Airtable**
- Language: **Multilingual (Malay + English)**
- Timezone: Properly handled for **UTC+8 (Malaysia)**

### 💬 Task 2 – WhatsApp AI Chat Agent
- Triggered by **Twilio WhatsApp messages**
- Tracks prior conversation from **Airtable logs**
- Replies using **DeepSeek LLM** with humanlike tone
- Sends follow-ups if user remains silent
- Simulated product suggestions (via function node)
- Seamless ongoing chat loop with proper condition checks

### 🧑‍💼 Task 3 – Avatar Coaching Assistant
- User sends message, AI replies like a human coach
- Avatar is generated using **HeyGen API**
- Backend loops to wait until **status = completed**
- If generation fails, fallback video is sent
- Final video link is passed to the **frontend UI (React + MUI)**
- Session data stored in **Airtable**

---

## 🧠 Key Features

- 🔁 Smart loop/fallback logic for video generation
- 🌐 Language detection (BM/EN)
- 🧠 Humanlike LLM tone + metadata parsing
- 🔁 Webhook → LLM → API Chain flow
- ✅ Airtable & Calendar CRM logs
- 🧑‍💼 Avatar UI using **React + MUI**
- 🛠️ All nodes are **noted with internal documentation** (see below)

---

## 🚀 Setup Instructions

### 1. Clone This Repo
```bash
git clone https://github.com/your-username/ai-agentic-workflows-suite.git
