# 📚 Library Management System

A full-stack Library Management System built using Spring Boot and React.  
This project allows users to manage books, issue books, and return books with quantity tracking.

---

## 🚀 Tech Stack

- Backend: Spring Boot (Java)
- Frontend: React.js
- Database: MySQL
- Deployment:
  - Backend: Railway
  - Frontend: Netlify

---

## ✨ Features

- 📖 Add new books
- 📋 View all books
- 📉 Issue book (reduces quantity)
- 📈 Return book (increases quantity)
- 💰 Fine calculation for late returns
- 🌐 Full-stack deployment

---

## 🔗 Live Demo

- Frontend: https://verdant-kashata-03381c.netlify.app/
- Backend API: https://library-management-system-production-4ccd.up.railway.app/books

---

## 📌 API Endpoints

### Books
- GET /books → Get all books
- POST /books → Add new book

### Issue
- POST /issues/{bookId}/{memberId} → Issue book

### Return
- DELETE /issues/return/{issueId} → Return book

---

## 📷 Screenshots (Optional)

(Add screenshots here later)

---

## 🧠 Learnings

- Built REST APIs using Spring Boot
- Integrated frontend with backend using fetch API
- Handled CORS issues during deployment
- Implemented full CRUD operations
- Deployed full-stack project successfully

---

## 📈 Future Improvements

- Add Member management
- Add authentication (login system)
- Improve UI design
- Add search and filter functionality

---

## 👨‍💻 Author

Your Name
