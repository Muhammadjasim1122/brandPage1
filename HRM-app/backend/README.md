# Frappe HR Backend API

Backend API server for Frappe HR application with clean, maintainable folder structure.

## Project Structure

```
backend/
├── config/
│   ├── db.js              # MongoDB connection configuration
│   └── auth.js            # JWT secrets and configuration
├── middleware/
│   ├── authMiddleware.js  # JWT authentication middleware
│   └── errorMiddleware.js # Error handling middleware
├── models/
│   └── User.js            # User schema/model
├── controllers/
│   └── userController.js  # Business logic for user operations
├── routes/
│   └── userRoutes.js      # API route definitions
├── utils/
│   └── generateToken.js   # JWT token generation utility
├── server.js              # Main server file (entry point)
├── .env                   # Environment variables
├── .gitignore
└── package.json
```

## Folder Structure Explanation

| Folder         | Purpose                                 | Example File        |
| -------------- | --------------------------------------- | ------------------- |
| `config/`      | DB connection and app configuration     | `db.js`             |
| `models/`      | MongoDB schemas and models              | `User.js`           |
| `controllers/` | Business logic / request handling       | `userController.js` |
| `routes/`      | Defines API endpoints                   | `userRoutes.js`     |
| `middleware/`  | Request pre-processing / authentication | `authMiddleware.js` |
| `utils/`       | Helper functions like token generation  | `generateToken.js`  |
| `server.js`    | App entry point / server setup          | —                   |

## Benefits of This Structure

✅ **Separation of Concerns**: Each folder has a specific responsibility  
✅ **Easy to Navigate**: Find files quickly by their purpose  
✅ **Scalable**: Easy to add new features without cluttering  
✅ **Maintainable**: Changes in one area don't affect others  
✅ **Professional**: Follows industry best practices  

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   - Copy `.env.example` to `.env` (if exists)
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

#### POST `/api/auth/google-signup`
Register or sign in with Google.

#### POST `/api/auth/login`
Login with email and password.

### Health Check

#### GET `/api/health`
Check if the server is running.

## How Files Work Together

1. **Request Flow**:
   - `server.js` → receives request
   - `routes/userRoutes.js` → defines endpoint
   - `middleware/authMiddleware.js` → authenticates (if protected)
   - `controllers/userController.js` → handles business logic
   - `models/User.js` → interacts with database
   - `utils/generateToken.js` → generates JWT token

2. **Error Handling**:
   - `middleware/errorMiddleware.js` → catches and formats errors

3. **Configuration**:
   - `config/db.js` → database connection
   - `config/auth.js` → JWT configuration

## Development

- The server runs on port 5000 by default
- Use `nodemon` for auto-reload during development
- Make sure MongoDB is running before starting the server

