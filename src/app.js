const express = require('express');
const cors = require('cors');
const attendanceRoutes = require('./routes/attendance.routes');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Routes
app.use('/api', attendanceRoutes);

// Handle 404 errors
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

module.exports = app;