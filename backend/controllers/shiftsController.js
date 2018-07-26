// import model for use in controller functions
const { Shift } = require('../models/Shift')
const { Business } = require('../models/Business')
const { Employee } = require('../models/Employee')

// Logic to create shift
const createShift = async (req, res) => {
  // I'm put everything in a try-catch block because I'm paranoid
  try {
    const {date, location, startTime, endTime,
      standardMinutes, overtimeMinutes, doubleTimeMinutes, totalPay} = req.body

    let userId = ''
    let businessId = ''
    if (process.env.NODE_ENV === 'development') {
      let employeesList = await Employee.find()
      userId = employeesList[0]._id
      let businesses = await Business.find()
      businessId = businesses[0]._id // This is only to allow for development 
    } else {
      userId = req.user._id
      businessId = req.user.businessId
    }

    // 4. Create new shift object
    const shiftJson = {
      employee: userId,
      date: date,
      location: location,
      startTime: startTime,
      endTime: endTime,
      standardMinutes: standardMinutes,
      overtimeMinutes: overtimeMinutes,
      doubleTimeMinutes: doubleTimeMinutes,
      totalPay: totalPay,
      status: 'pending',
      business: businessId
    }

    const newShift = new Shift(shiftJson)

    let isDemo
    if (req.user) { isDemo = req.user.isDemo }
    if (isDemo) { // If the user is a demo, return a success response without updating the database
      return res.status(200).json(newShift)
    } else {
      // 4. Save new shift
      newShift.save()
        .then(newShift => {
          return res.status(200).json(newShift)
        })
        .catch(err => {
          return res.status(400).json({
            err: err.message
          })
        })
    }
  } catch (error) {
    res.status(500).send('Something went wrong')
  }
}

// Logic to get all the shifts for one employee for their dashboard
const getEmployeeShifts = async (req, res) => {
  // I'm put everything in a try-catch block because I'm paranoid
  try {
    let userId = ''
    // 1. Get the user Id from the jwt payload
    if (process.env.NODE_ENV === 'development') {
      let employeesList = await Employee.find()
      userId = employeesList[0]._id // This is only to allow for development
    } else {
      userId = req.user._id
    }

    // 2. Fetch all the shifts where the 'employee' property matches the Id
    const shifts = await Shift.find({ employee: userId })
      .populate('employee')
      .populate('business')

    // 3. If no shifts found, send back 404 error (resource not found)
    if (shifts.length === 0) {
      return res.status(404).send('No shifts found')
    }

    // 4. If shifts are found, send back the data
    return res.send(shifts)
  } catch (error) {
    res.status(500).send('Something went wrong')
  }
}

// Logic to enable employees to archive rejected shifts
const archiveShift = async (req, res) => {
  // 1. Extract shift id from the URL params
  const shiftId = req.params.id

  // The following steps needs to be wraped in a try-catch block because .findById will throw an error if a shiftId is not a valid ObjectId
  try {
    // 2. Search for that shift in the database
    const shift = await Shift.findById(shiftId)

    // 3. If no shift is found, send back 404 error (resource not found)
    if (!shift) {
      return res.status(404).send('Shift not found')
    }

    let isDemo
    if (req.user) { isDemo = req.user.isDemo }
    if (isDemo) { // If the user is a demo, return a success response without updating the database
      shift.status = 'archived'
      return res.status(200).send(shift)
    } else {
      // 4. If found, update the shift's 'status' propserty to 'archived'
      shift.set({
        status: 'archived'
      })

      // 5. Save the update to the database
      const result = await shift.save()

      // 6. Send back the saved shift
      return res.status(200).send(result)
    }
  } catch (error) {
    // An error will be thrown if the shiftId is not a valid ObjectId
    return res.status(404).send('Shift not found')
  }
}

// Logic to enable employees to delete pending shifts
const deleteShift = async (req, res) => {
  // 1. Extract shift id from the URL params
  const shiftId = req.params.id

  // The following steps needs to be wraped in a try-catch block because .findByIdAndRemove will throw an error if a shiftId is not a valid ObjectId
  try {
    let isDemo
    if (req.user) { isDemo = req.user.isDemo }
    if (isDemo) { // If the user is a demo, return a success response without updating the database
      // 2. Search for that shift in the database
      const deletedShift = await Shift.findById(shiftId)

      // 3. If no shift is found, send back 404 error (resource not found)
      if (!deletedShift) {
        return res.status(404).send('Shift not found')
      }

      // 4. Send back the deleted shift
      return res.send(deletedShift)
    } else {
      // 2. Search for that shift in the database and delete it
      const deletedShift = await Shift.findByIdAndRemove(shiftId)

      // 3. If no shift is found, send back 404 error (resource not found)
      if (!deletedShift) {
        return res.status(404).send('Shift not found')
      }

      // 4. Send back the deleted shift
      return res.send(deletedShift)
    }
  } catch (error) {
    // An error will be thrown if shiftId is not a valid ObjectId
    return res.status(404).send('Shift not found')
  }
}

// Logic to enable managers to get all pending shifts
const pendingShifts = async (req, res) => {
  // I'm put everything in a try-catch block because I'm paranoid
  try {
    let businessId = ''
    // 1. Extract business id from the jwt payload
    if (process.env.NODE_ENV === 'development') {
      let businesses = await Business.find()
      businessId = businesses[0]._id // This is only to allow for development
    } else {
      businessId = req.user.businessId
      console.log('works:', businessId)
    }

    // 2. Search for all shifts that have that businessId
    let allShifts = []
    if (process.env.NODE_ENV === 'development') {
      allShifts = await Shift.find()
        .and([ { status: 'pending' } ]) // This is only to allow for development
        .populate('employee')
    } else {
      allShifts = await Shift.find()
        .and([ { business: businessId }, { status: 'pending' } ])
        .populate('employee')
    }

    // 3. If no shifts are found, send back 404 error (resource not found)
    if (allShifts.length === 0) {
      return res.status(404).allShiftssend('No Shifts Found')
    }

    // 4. Send back all the shifts
    res.status(200).send(allShifts)
  } catch (error) {
    console.log(error)
    res.status(500).send('Internal Server Error: (pendingShifts)')
  }
}

// Logic to approve a shift
const approveShift = async (req, res) => {
  // I'm put everything in a try-catch block because I'm paranoid
  try {
    // 1. Get the shift id from the URL params
    const shiftId = req.params.id

    // 2. Find the shift in the database
    const shift = await Shift.findById(shiftId)

    // 3. If no shift is found, send back 404 error (resource not found)
    if (shift === null) {
      return res.status(404).send('Shift Not Found')
    }

    // 4. If shift status is not pending, return 403 error (not allowed to approve shift)
    if (shift.status !== 'pending') {
      return res.status(403).send('Can\'t Update Shift Status')
    }

    let isDemo
    if (req.user) { isDemo = req.user.isDemo }
    if (isDemo) { // If the user is a demo, return a success response without updating the database
      shift.status = 'approved'
      return res.status(200).send(shift)
    } else {
      // 5. Update the shift status to approved
      shift.set({ // 2. Update the movie
        status: 'approved'
      })
      const updatedShift = await shift.save()
      
      // 6. Send back the updated shift
      return res.status(200).send(updatedShift)
    }
  } catch (error) {
    console.log(error)
    res.status(500).send('Internal Server Error: ' + error)
  }
}

// Logic to approve all shifts
const approveAllShifts = async (req, res) => {
  // I'm put everything in a try-catch block because I'm paranoid
  try {
    let businessId = ''
    // 1. Get the business Id from the jwt payload
    if (process.env.NODE_ENV === 'development') {
      let businesses = await Business.find()
      businessId = businesses[0]._id  // This is only to allow for development
    } else {
      businessId = req.user.businessId
    }

    // 2. Search for all shifts that have that businessId
    let allShifts = []
    if (process.env.NODE_ENV === 'development') {
      allShifts = await Shift.find()
        .and([ { status: 'pending' } ]) // Delete? This is only to allow for development
    } else {
      allShifts = await Shift.find()
        .and([ { business: businessId }, { status: 'pending' } ])
    }

    // 3. If no shifts are found, send back 404 error (resource not found)
    if (allShifts.length === 0) {
      return res.status(404).send('No Shifts Found')
    }

    let isDemo
    if (req.user) { isDemo = req.user.isDemo }
    if (isDemo) { // If the user is a demo, return a success response without updating the database
      allShifts.forEach((shift) => {
        shift.status = 'approved'
      })
      return res.status(200).send('All Shifts Approved')
    } else {
      // 4. Update the shift statuses to approved
      await allShifts.forEach((shift) => {
        shift.set({
          status: 'approved'
        })
        shift.save()
      })
    }

    // 5. Send back a confirmation message
    return res.status(200).send('All Shifts Approved')
  } catch (error) {
    res.status(500).send('Something went wrong')
  }
}

// Logic to reject a shift
const rejectShift = async (req, res) => {
  // I'm put everything in a try-catch block because I'm paranoid
  try {
    // 1. Get the shift id from the URL params
    const shiftId = req.params.id

    // 2. Find the shift in the database
    const shift = await Shift.findById(shiftId)

    // 3. If no shift is found, send back 404 error (resource not found)
    if (shift === null) {
      return res.status(404).send('Shift Not Found')
    }

    // 4. If shift status is not pending, return 403 error (not allowed to approve shift)
    if (shift.status !== 'pending') {
      return res.status(403).send('Can\'t Update Shift Status')
    }

    let isDemo
    if (req.user) {
      isDemo = req.user.isDemo
    }
    if (isDemo) { // If the user is a demo, return a success response without updating the database
      shift.status = 'rejected'
      return res.status(200).send(shift)
    } else {
      // 5. Update the shift status to approved
      shift.set({ // 2. Update the movie
        status: 'rejected'
      })
      const updatedShift = await shift.save()

      // 6. Send back the updated shift
      return res.status(200).send(updatedShift)
    }
  } catch (error) {
    res.status(500).send('Internal Server Error: ' + error)
  }
}

// Logic to get all of the business' shifts
const getAllShifts = async (req, res) => {
  // I'm put everything in a try-catch block because I'm paranoid
  try {
    let businessId = ''
    // 1. Extract business id from the jwt payload
    if (process.env.NODE_ENV === 'development') {
      let businesses = await Business.find()
      businessId = businesses[0]._id  // This is only to allow for development
    } else {
      businessId = req.user.businessId
    }

    // 2. Search for all shifts that have that businessId
    let allShifts = []
    if (process.env.NODE_ENV === 'development') {
      allShifts = await Shift.find() // This is only to allow for development
        .populate('employee')
    } else {
      allShifts = await Shift.find()
        .and([ { business: businessId } ])
        .populate('employee')
    }

    // 3. If no shifts are found, send back 404 error (resource not found)
    if (allShifts.length === 0) {
      return res.status(404).send('No Shifts Found')
    }

    // 4. Send back the shifts
    res.send(allShifts)

  } catch (error) {
    res.status(500).send('Something went wrong')
  }
}

const testRoute = (req, res) => {
  res.status(200).json({ data: 'test' })
}

// export all controller functions required by router
module.exports = {
  createShift,
  getEmployeeShifts,
  archiveShift,
  pendingShifts,
  deleteShift,
  approveShift,
  approveAllShifts,
  rejectShift,
  getAllShifts,
  testRoute
}
