# 🏡 Airbnb Clone

A full-stack Airbnb-inspired web application that allows users to explore, create, edit, and manage property listings. The application includes secure user authentication, authorization, session management, image uploads, and complete CRUD functionality.

---

## 📌 Features

### 👤 User Authentication
- User Registration
- User Login & Logout
- Password Authentication using Passport.js
- Secure Session Management
- Cookie-based Authentication

### 🔐 Authorization
- Only authenticated users can create listings.
- Only listing owners can edit or delete their own listings.
- Protected routes using middleware.

### 🏠 Property Listings
- Add New Listings
- View All Listings
- View Individual Listing Details
- Edit Existing Listings
- Delete Listings

### 📷 Image Support
- Upload listing images
- Display uploaded property images

### ⭐ Reviews
- Add Reviews
- Delete Reviews
- Reviews linked with users

### ⚠ Error Handling
- Custom Error Pages
- Validation for invalid requests
- Centralized Error Handling Middleware

---

# 🛠 Tech Stack

## Frontend
- HTML
- CSS
- Bootstrap
- EJS Templates

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## Authentication
- Passport.js
- Express Session
- Cookie Parser

## Other Packages
- Method Override
- Connect Flash
- Joi Validation
- dotenv

---

# 📂 Folder Structure

```
Airbnb-Clone/
│
├── controllers/
├── middleware/
├── models/
├── public/
│   ├── css/
│   ├── js/
│
├── routes/
├── utils/
├── views/
│
├── app.js
├── package.json
└── README.md
```

---

# 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/tejaswinikanuri/Air-bnb-Clone.git
```

### Go to Project Folder

```bash
cd Air-bnb-Clone
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file and add:

```
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_secret_key
```

### Run the Server

```bash
node app.js
```

or

```bash
nodemon app.js
```

Open

```
http://localhost:3000
```

---

# 📷 Screenshots

## Home Page

(Add Screenshot)

---

## Login Page

(Add Screenshot)

---

## Property Details

(Add Screenshot)

---

## Add Listing

(Add Screenshot)

---

## Review Section

(Add Screenshot)

---

# 🔒 Security Features

- Password Authentication
- Session Management
- Cookie Authentication
- Authorization Middleware
- Protected Routes
- Input Validation
- Error Handling

---

# 💡 Key Learnings

During this project I learned:

- Backend Architecture
- RESTful APIs
- Authentication & Authorization
- Session and Cookie Management
- MongoDB Database Design
- MVC Architecture
- CRUD Operations
- Middleware Development
- Error Handling
- Git & GitHub Workflow

---

# 🔮 Future Enhancements

- Payment Gateway Integration
- Google OAuth Login
- Maps Integration
- Property Search Filters
- Wishlist Feature
- Booking System
- Admin Dashboard
- Cloud Image Storage
- Email Verification
- Responsive Mobile Design

---

# 👩‍💻 Author

**Tejaswini Kanuri**

LinkedIn:
https://www.linkedin.com/in/tejaswini-kanuri

GitHub:
https://github.com/tejaswinikanuri
