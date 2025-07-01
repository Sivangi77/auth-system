# Auth System - Full Stack Authentication System

A responsive full-stack authentication system built with the **MERN Stack**, designed for a clean and secure signup/login experience. This app uses **JWT**, **hashed passwords**, and **httpOnly cookies** for secure sessions.

🌐 **Live Demo**: [https://auth-system-1cio.onrender.com](https://auth-system-1cio.onrender.com)  

---

## 🎯 Project Purpose

To practice and demonstrate full-stack web development by:
- Creating protected routes using **JWT tokens**
- Hashing user passwords securely using **bcryptjs**
- Managing user sessions via **httpOnly cookies**
- Building a clean UI with **Tailwind** and **Framer Motion**
- Deploying a full-stack app on **Render**

---

## ⚙️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- Zustand
- Framer Motion
- Lucide-react Icons

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- bcryptjs
- JWT
- cookie-parser

**Tools:**
- Cross-env
- Nodemon
- Git & GitHub
- Render (Deployment)

---

## 🚀 Features

- Secure signup/login with hashed passwords
- JWT-based authentication
- Responsive dashboard
- Global error handling
- Auth state with Zustand
- Protected routes and redirects
- Live deployment on Render

---

## 🔧 Setup & Run Locally

### 1. Clone and move into the project

```bash
git clone https://github.com/Sivangi77/auth-system.git
cd auth-system
```

### 2. Setup `.env` file in the root directory

```env
MONGO_URI=your_mongo_uri
PORT=5000
JWT_SECRET=mysecretkey
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### 3. Build and Start

```bash
npm run build
npm run start
```

The backend will run on `http://localhost:5000`.  
Frontend (if running separately) runs on `http://localhost:5173`.

---

## 🧪 How to Test

- Signup with new email → check password is hashed in DB
- Try logging in with wrong credentials to check error handling
- Use DevTools → check cookie is httpOnly
- Resize window → responsive layout

---

👩‍💻 **Made by Sivangi Kashyap**