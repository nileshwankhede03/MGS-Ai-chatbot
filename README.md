# second-round-assignm-final-13617-nilesh

# 🤖 Chatbot Application with AI Integration

## 📌 Overview

This project is a **Chatbot Application** built as part of an assignment to demonstrate integration with an AI API and effective state management using **Redux Toolkit (React)**.

The application enables users to send messages and receive AI-generated responses in real time. It focuses on clean UI/UX, efficient asynchronous handling, and a scalable architecture.

---

## 🚀 Features

### 💬 User Interaction

* Send messages through an input field
* Receive real-time AI responses
* Dynamic chat interface

### 🔄 State Management (Redux)

* Store chat history (user + AI messages)
* Manage loading state during API calls
* Handle error states with user-friendly messages
* Async API handling using **createAsyncThunk**

### 🌐 API Integration

* Integrated with **Gemini API**
* Secure API key using environment variables
* Proper request-response handling
* Error handling for network/API issues

### 🎨 UI/UX

* Clean and intuitive chat interface
* Left-right message alignment (User vs AI)
* Typing animation (loading indicator)
* Markdown rendering for structured responses
* Fully responsive design (mobile + desktop)

### ⚡ Performance

* Smooth UI interactions without lag
* Efficient rendering using Redux
* Handles multiple messages seamlessly

---

## 🛠️ Tech Stack

* React
* Redux Toolkit
* Node.js
* Express
* Tailwind CSS
* Gemini API

---

## 🏗️ Architecture

The project follows a **4-layer architecture**:

```text
UI Layer        → React Components (ChatLayout, MessageBubble)
Hook Layer      → Custom Hooks (useChat)
State Layer     → Redux Toolkit (chatSlice, store)
Service Layer   → API Calls (chatService)
```

---

## 📂 Project Structure

````bash
.
├── backend/
│   ├── src/
│   │   ├── controller/
│   │   │   └── chat.controller.js   
│   │   ├── routes/
│   │   │   └── chat.route.js        
│   │   ├── db/
│   │   │   └── database.js         
│   │   └── app.js                   
│   ├── server.js                   
│   ├── .env                         
│   ├── package.json
│   └── package-lock.json
│
├── chatbot/ (Frontend)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatLayout.jsx
│   │   │   ├── MarkdownRenderer.jsx
│   │   │   ├── MessageBubble.jsx
│   │   │   └── TypingIndicator.jsx
│   │   ├── hooks/
│   │   │   └── useChat.js
│   │   ├── services/
│   │   │   └── chatService.js
│   │   ├── store/
│   │   │   ├── slices/
│   │   │   │   └── chatSlice.js
│   │   │   └── store.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── package.json
│   └── package-lock.json
````

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd project-folder
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
GEMINI_API_KEY=your_api_key_here
```

Run server:

```bash
node server.js
```

---

### 3️⃣ Frontend Setup

```bash
cd chatbot
npm install
npm run dev
```

---

## ▶️ Usage

1. Open the application in your browser
2. Enter a message in the input box
3. Click **Send** or press **Enter**
4. View AI responses instantly in the chat interface

---

## 🌐 API Details

### Endpoint

```
POST /api/chat
```

### Request Body

```json
{
  "message": "Hello AI"
}
```

### Response

```json
{
  "reply": "Hello! How can I assist you today?"
}
```

---

## 🔐 Security

* API key stored securely using environment variables
* No sensitive data exposed on the frontend

---

## 👨‍💻 Author

**MultiGenesys Software Pvt. Ltd.**
Nilesh Bhausaheb Wankhede - BTech in Information Technology

---

## 🏁 Conclusion

This project demonstrates the implementation of **AI integration, Redux-based state management, and modern frontend development practices**, fulfilling all assignment requirements while maintaining clean architecture and user experience 🚀
