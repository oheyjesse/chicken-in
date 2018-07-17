// require express, and create a router
const express = require('express')
const router = express.Router()
// import the relevant controller here, so the router can point to it
const shiftsController = require('../controllers/shiftsController')

// GET /api/shifts/ TODO: Delete: This is a test route 
router.route('/')
  .get(shiftsController.getAllShifts)

// EMPLOYEE Shift Routes
// POST /api/shifts/create
// Request: Create a new shift
// Process: Check credentials and create a new shift
// Response: The created shift
router.route('/create')
  .post(shiftsController.createShift)

// Request: Request all shifts for that particular employee
// Process: Check credentials and collect all shifts for that employee for 
// Response: The created shift
// GET /api/shifts/employee
router.route('/employee')
  .get(shiftsController.getEmployeeShifts)

// Request: Archive a rejected shift
// Process: Check credentials, find the shift by Id and update the status to 'archived'
// Response: The updated shift
// PUT /api/shifts/archive/:id
router.route('/archive/:id')
  .put(shiftsController.archiveShift)

// Request: Delete a pending shift
// Process: Check credentials, find the time shift by Id and delete the shift
// Response: The deleted shift
// DELETE /api/shifts/delete/:id
router.route('/delete/:id')
  .delete(shiftsController.deleteShift)

// MANAGER Shift Routes

module.exports = router

// GET shifts/employee | employee/dashboard DONE
// POST shifts/create | employee/dashboard DONE
// PUT shifts/archive/:id | employee/dashboard | Archive rejected shift DONE
// DELETE shifts/delete/:id | employee/dashboard | Delete pending shift DONE

// GET shifts/pending | manager/review
// PUT shifts/approve/:id | manager/review
// PUT shifts/approveAll | manager/review
// PUT shifts/reject/:id | manager/review

// GET shifts/approved | manager/reports
// GET shifts/ | manager/reports **not MVP DONE