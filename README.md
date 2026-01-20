# Attendance Management Backend

A Node.js + Express backend for managing attendance records. This project provides a simple API for tracking employee/student attendance with basic CRUD operations.

## Features

- Health check endpoint
- Create attendance records with name, date, and status
- Retrieve all attendance records
- Get specific attendance record by ID
- Delete attendance records
- Standardized API responses
- Input validation

## Tech Stack

- Node.js
- Express.js
- JavaScript (ES6+)
- CORS for cross-origin requests

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd attendanceapp-backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on port 3000 by default. You can change this by setting the PORT environment variable.

## API Endpoints

### Health Check
- `GET /health` - Check if the server is running
  - Response: `{ "status": "ok" }`

### Attendance Management
- `POST /api/attendance` - Create a new attendance record
  - Request Body: `{ "name": "John Doe", "date": "2023-12-01", "status": "present" }`
  - Valid statuses: present, absent, late, half-day
  - Response: Created attendance record with ID

- `GET /api/attendance` - Get all attendance records
  - Response: Array of all attendance records

- `GET /api/attendance/:id` - Get a specific attendance record
  - Response: Single attendance record

- `DELETE /api/attendance/:id` - Delete a specific attendance record
  - Response: Deleted attendance record

## Response Format

Successful responses follow this format:
```json
{
  "success": true,
  "message": "Success message",
  "data": { /* actual data */ }
}
```

Error responses follow this format:
```json
{
  "success": false,
  "message": "Error message",
  "data": null
}
```

## Project Structure

```
attendanceapp-backend/
├── src/
│   ├── app.js              # Express app configuration
│   ├── server.js           # Server startup logic
│   ├── routes/
│   │   └── attendance.routes.js  # Attendance route definitions
│   ├── controllers/
│   │   └── attendance.controller.js  # Business logic
│   └── utils/
│       └── response.js     # Standardized response utilities
├── package.json
├── .gitignore
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull RequestLast updated: Tue Jan 20 11:52:46 AM IST 2026
