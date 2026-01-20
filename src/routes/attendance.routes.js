const express = require('express');
const { 
  createAttendance, 
  getAllAttendance, 
  getAttendanceById, 
  deleteAttendance 
} = require('../controllers/attendance.controller');

const router = express.Router();

/**
 * @route POST /attendance
 * @desc Create a new attendance record
 * @access Public
 */
router.post('/attendance', createAttendance);

/**
 * @route GET /attendance
 * @desc Get all attendance records
 * @access Public
 */
router.get('/attendance', getAllAttendance);

/**
 * @route GET /attendance/:id
 * @desc Get a specific attendance record by ID
 * @access Public
 */
router.get('/attendance/:id', getAttendanceById);

/**
 * @route DELETE /attendance/:id
 * @desc Delete a specific attendance record by ID
 * @access Public
 */
router.delete('/attendance/:id', deleteAttendance);

module.exports = router;