# Frappe HR Backend API

Backend API server for Frappe HR application.

## Project Structure

```
backend/
├── config/
│   ├── database.js      # MongoDB connection configuration
│   └── auth.js          # JWT secrets and configuration
├── middleware/
│   └── auth.js          # Authentication middleware
├── models/
│   └── User.js          # User schema/model
├── routes/
│   └── authRoutes.js    # Authentication routes (signup, login)
├── server.js            # Main server file
├── package.json
├── .gitignore
└── .env.example
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   - Copy `.env.example` to `.env`
   - Update the values in `.env` file (especially JWT_SECRET for production)

3. **Start MongoDB**
   - Make sure MongoDB is running on `mongodb://localhost:27017/`
   - The database name will be `frappe-hr`

4. **Run the Server**
   ```bash
   # Development mode (with auto-reload)
   npm run dev

   # Production mode
   npm start
   ```

## API Endpoints

### Authentication Routes (`/api/auth`)

#### POST `/api/auth/signup`
Register a new user with email and password.

**Request Body:**
```json
{
  "email": "johndoe@mail.com",
  "password": "password123",
  "fullName": "John Doe",
  "firstName": "John",
  "lastName": "Doe",
  "username": "johndoe"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "johndoe@mail.com",
    "fullName": "John Doe",
    ...
  }
}
```

#### POST `/api/auth/google-signup`
Register or sign in with Google.

**Request Body:**
```json
{
  "email": "johndoe@gmail.com",
  "googleId": "google_user_id",
  "fullName": "John Doe",
  "firstName": "John",
  "lastName": "Doe",
  "profileImage": "https://..."
}
```

#### POST `/api/auth/login`
Login with email and password.

**Request Body:**
```json
{
  "email": "johndoe@mail.com",
  "password": "password123"
}
```

### Health Check

#### GET `/api/health`
Check if the server is running.

**Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Database

- **MongoDB Connection:** `mongodb://localhost:27017/frappe-hr`
- **Collections:** `users`

## Authentication

JWT tokens are used for authentication. Include the token in the Authorization header:
```
Authorization: Bearer <token>
```

## Development

- The server runs on port 5000 by default
- Use `nodemon` for auto-reload during development
- Make sure MongoDB is running before starting the server

