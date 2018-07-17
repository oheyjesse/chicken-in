// import model for use in controller functions
const { Shift } = require('../models/Shift')

const getAllShifts = (req, res) => {
  Shift.find()
    .then(shifts => {
      res.status(200).json(shifts)
    })
    .catch(err => {
      res.status(400).json({
        err: err.message
      })
    })
}

// Logic to create shift
const createShift = (req, res) => {
  const {date, location, startTime, endTime,
    standardMinutes, overtimeMinutes, doubleTimeMinutes, totalPay} = req.body

  const shiftJson = {
    employee: '123', // TODO: Change to req.user._id
    date: date,
    location: location,
    startTime: startTime,
    endTime: endTime,
    standardMinutes: standardMinutes,
    overtimeMinutes: overtimeMinutes,
    doubleTimeMinutes: doubleTimeMinutes,
    totalPay: totalPay,
    status: 'pending'
  }

  const newShift = new Shift(shiftJson)
  newShift.save()
    .then(newShift => {
      res.status(200).json(newShift)
    })
    .catch(err => {
      res.status(400).json({
        err: err.message
      })
    })
}

// Logic to get all the shifts for one employee for their dashboard
const getEmployeeShifts = async (req, res) => {
  // I'm put everything in a try-catch block because I'm paranoid
  try {
    // 1. Get the user Id from the jwt payload
    const userId = '1' // TODO: Change this to userId = req.user._id after the authorize middleware has been added

    // 2. Fetch all the shifts where the 'employee' property matches the Id
    const shifts = await Shift.find({ employee: userId })

    // 3. If no shifts found, send back 404 error (resource not found)
    if (shifts.length === 0) {
      return res.send('No shifts found')
    }

    // 4. If shifts are found, send back the data
    return res.send(shifts)
  } catch (error) {
    res.send('Something went wrong')
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
      return res.send('Shift not found')
    }

    // 4. If found, update the shift's 'status' propserty to 'archived'
    shift.set({
      status: 'archived'
    })

    // 5. Save the update to the database
    const result = await shift.save()

    // 6. Send back the saved shift
    res.send(result) // Console log the updated movie

  } catch (error) {
    // An error will be thrown if the shiftId is not a valid ObjectId
    return res.send('Shift not found')
  }
}

// Logic to enable employees to delete pending shifts
const deleteShift = async (req, res) => {
  // 1. Extract shift id from the URL params
  const shiftId = req.params.id

  // The following steps needs to be wraped in a try-catch block because .findByIdAndRemove will throw an error if a shiftId is not a valid ObjectId
  try {
    // 2. Search for that shift in the database and delete it
    const deletedShift = await Shift.findByIdAndRemove(shiftId)
    
    // 3. If no shift is found, send back 404 error (resource not found)
    if (!deletedShift) {
      return res.send('Shift not found')
    }

    // 4. Send back the deleted shift
    res.send(deletedShift)

  } catch (error) {
    // An error will be thrown if shiftId is not a valid ObjectId
    return res.send('Shift not found')
  }
}

// Logic to enable employees to delete pending shifts

// export all controller functions required by router
module.exports = {
  getAllShifts, // TODO: Delete
  createShift,
  getEmployeeShifts,
  archiveShift,
  deleteShift
}
