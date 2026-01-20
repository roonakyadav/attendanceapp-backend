const { sendSuccess, sendError } = require('../utils/response');

// In-memory storage for attendance records
let attendanceRecords = [];

/**
 * Controller function to handle POST /api/attendance
 * Creates a new attendance record
 */
const createAttendance = (req, res) => {
  try {
    const { name, date, status } = req.body;

    // Validate required fields
    if (!name || !date || !status) {
      return sendError(res, 'Name, date, and status are required fields', 400);
    }

    // Validate status value
    const validStatuses = ['present', 'absent', 'late', 'half-day'];
    if (!validStatuses.includes(status.toLowerCase())) {
      return sendError(res, `Status must be one of: ${validStatuses.join(', ')}`, 400);
    }

    // Validate date format (basic validation)
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      return sendError(res, 'Invalid date format. Please use ISO format (YYYY-MM-DD)', 400);
    }

    // Create attendance record
    const attendanceRecord = {
      id: Date.now().toString(), // Simple ID generation
      name: name.trim(),
      date: dateObj.toISOString().split('T')[0], // Store as YYYY-MM-DD format
      status: status.toLowerCase(),
      createdAt: new Date().toISOString()
    };

    // Add to in-memory storage
    attendanceRecords.push(attendanceRecord);

    // Return success response
    return sendSuccess(
      res, 
      attendanceRecord, 
      'Attendance record created successfully', 
      201
    );
  } catch (error) {
    console.error('Error creating attendance record:', error);
    return sendError(res, 'Internal server error', 500);
  }
};

/**
 * Controller function to handle GET /api/attendance
 * Retrieves all attendance records
 */
const getAllAttendance = (req, res) => {
  try {
    return sendSuccess(
      res, 
      attendanceRecords, 
      'Attendance records retrieved successfully'
    );
  } catch (error) {
    console.error('Error retrieving attendance records:', error);
    return sendError(res, 'Internal server error', 500);
  }
};

/**
 * Controller function to handle GET /api/attendance/:id
 * Retrieves a specific attendance record by ID
 */
const getAttendanceById = (req, res) => {
  try {
    const { id } = req.params;
    
    const record = attendanceRecords.find(record => record.id === id);
    
    if (!record) {
      return sendError(res, 'Attendance record not found', 404);
    }
    
    return sendSuccess(
      res, 
      record, 
      'Attendance record retrieved successfully'
    );
  } catch (error) {
    console.error('Error retrieving attendance record:', error);
    return sendError(res, 'Internal server error', 500);
  }
};

/**
 * Controller function to handle DELETE /api/attendance/:id
 * Deletes a specific attendance record by ID
 */
const deleteAttendance = (req, res) => {
  try {
    const { id } = req.params;
    
    const recordIndex = attendanceRecords.findIndex(record => record.id === id);
    
    if (recordIndex === -1) {
      return sendError(res, 'Attendance record not found', 404);
    }
    
    const deletedRecord = attendanceRecords.splice(recordIndex, 1)[0];
    
    return sendSuccess(
      res, 
      deletedRecord, 
      'Attendance record deleted successfully'
    );
  } catch (error) {
    console.error('Error deleting attendance record:', error);
    return sendError(res, 'Internal server error', 500);
  }
};

// Export controller functions
module.exports = {
  createAttendance,
  getAllAttendance,
  getAttendanceById,
  deleteAttendance
};