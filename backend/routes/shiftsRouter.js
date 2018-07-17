// require express, and create a router
const express = require('express')
const router = express.Router()
// import the relevant controller here, so the router can point to it
const shiftsController = require('../controllers/shiftsController')
const { authorize } = require('../middleware/authorize')
const { authEmployee } = require('../middleware/authEmployee')
const { authManager } = require('../middleware/authManager')

/////////////////////////////////
///// EMPLOYEE SHIFT ROUTES /////
/////////////////////////////////
// POST /api/shifts/create
// Request: Create a new shift
// Process: Check credentials and create a new shift
// Response: The created shift
router.route('/create')
  .post(shiftsController.createShift) // TODO: Add authorize and authEmployee middleware functions

// Request: Request all shifts for that particular employee
// Process: Check credentials and collect all shifts for that employee
// Response: The created shift
// GET /api/shifts/employee
router.route('/employee')
  .get(shiftsController.getEmployeeShifts) // TODO: Add authorize and authEmployee middleware functions

// Request: Archive a rejected shift
// Process: Check credentials, find the shift by Id and update the status to 'archived'
// Response: The updated shift
// PUT /api/shifts/archive/:id
router.route('/archive/:id')
  .put(shiftsController.archiveShift) // TODO: Add authorize and authEmployee middleware functions

// Request: Delete a pending shift
// Process: Check credentials, find the time shift by Id and delete the shift
// Response: The deleted shift
// DELETE /api/shifts/delete/:id
router.route('/delete/:id')
  .delete(shiftsController.deleteShift) // TODO: Add authorize and authEmployee middleware functions

////////////////////////////////
///// MANAGER SHIFT ROUTES /////
////////////////////////////////

// Request: Request all the pending shifts for that business
// Process: Check credentials and find all the shifts pending for that business
// Response: Send back all the pending shifts
// GET api/shifts/pending
router.route('/pending')
  .get(shiftsController.pendingShifts) // TODO: Add authorize and authManager middleware functions

// Request: Approve a shift
// Process: Check credentials, find the shift by Id and update the status to 'approved'
// Response: The approved shift
// PUT api/shifts/approve/:id
router.route('/approve/:id')
  .put(shiftsController.approveShift) // TODO: Add authorize and authManager middleware functions

// Request: Approve all shifts
// Process: Check credentials, find the all pending shifts and update their statuses to 'approved'
// Response: Confirmation message
// PUT api/shifts/approve/:id
router.route('/approveAll')
  .put(shiftsController.approveAllShifts) // TODO: Add authorize and authManager middleware functions

// Request: Reject a shift
// Process: Check credentials, find the shift by Id and update the status to 'rejected'
// Response: The rejected shift
// PUT api/shifts/reject/:id
router.route('/reject/:id')
  .put(shiftsController.rejectShift) // TODO: Add authorize and authManager middleware functions

// GET /api/shifts/all
router.route('/all')
  .get(shiftsController.getAllShifts) // TODO: Add authorize and authManager middleware functions

module.exports = router

// GET shifts/employee | employee/dashboard DONE
// POST shifts/create | employee/dashboard DONE
// PUT shifts/archive/:id | employee/dashboard | Archive rejected shift DONE
// DELETE shifts/delete/:id | employee/dashboard | Delete pending shift DONE

// GET shifts/pending | manager/review DONE
// PUT shifts/approve/:id | manager/review DONE
// PUT shifts/approveAll | manager/review DONE
// PUT shifts/reject/:id | manager/review DONE
// GET shifts/all | manager/reports DONE
