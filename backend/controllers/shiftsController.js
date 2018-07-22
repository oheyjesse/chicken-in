// import model for use in controller functions
const { Shift } = require('../models/Shift')
// TODO: Add authorize middleware and checkManager/ checkEmployee middleware to all these routes

// Logic to create shift
const createShift = (req, res) => {
  // I'm put everything in a try-catch block because I'm paranoid
  try {
    const {date, location, startTime, endTime,
      standardMinutes, overtimeMinutes, doubleTimeMinutes, totalPay} = req.body

    // 1. Get the user Id from the jwt payload
    const userId = '5b53377c46556409ebbad3c5' // TODO: Change this to userId = req.user._id after the authorize middleware has been added

    // 2. Get the business Id from the jwt payload
    const businessId = '5b53377c46556409ebbad3bc' // TODO: Change this to businessId = req.user.businessId after the authorize middleware has been added

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

    // 4. Save new shift
    const newShift = new Shift(shiftJson)
    newShift.save()
      .then(newShift => {
        return res.status(200).json(newShift)
      })
      .catch(err => {
        return res.status(400).json({
          err: err.message
        })
      })
  } catch (error) {
    res.status(500).send('Something went wrong')
  }
}

// Logic to get all the shifts for one employee for their dashboard
const getEmployeeShifts = async (req, res) => {
  // I'm put everything in a try-catch block because I'm paranoid
  try {
    // 1. Get the user Id from the jwt payload
    const userId = '5b53377c46556409ebbad3c5' // TODO: Change this to userId = req.user._id after the authorize middleware has been added

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
    return res.status(404).send('Shift not found')
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
      return res.status(404).send('Shift not found')
    }

    // 4. Send back the deleted shift
    res.send(deletedShift)

  } catch (error) {
    // An error will be thrown if shiftId is not a valid ObjectId
    return res.status(404).send('Shift not found')
  }
}

// Logic to enable managers to get all pending shifts
const pendingShifts = async (req, res) => {
  // I'm put everything in a try-catch block because I'm paranoid
  try {
    // 1. Extract business id from the jwt payload
    const businessId = '5b53377c46556409ebbad3bc' // TODO: Change this to businessId = req.user.businessId after the authorize middleware has been added

    // 2. Search for all shifts that have that businessId
    const allShifts = await Shift.find()
      // .and([ { business: businessId }, { status: 'pending' } ])
      .and([ { status: 'pending' } ]) // TODO: Hacky workaround: Remove this line, replace with one above
      .populate('employee')

    // 3. If no shifts are found, send back 404 error (resource not found)
    if (allShifts.length === 0) {
      return res.status(404).allShiftssend('No Shifts Found')
    }
    // 4. Send back all the shifts
    res.send(allShifts)
  } catch (error) {
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

    // 5. Update the shift status to approved
    shift.set({ // 2. Update the movie
      status: 'approved'
    })
    const updatedShift = await shift.save()

    // 6. Send back the updated shift
    res.send(updatedShift)
  } catch (error) {
    res.status(500).send('Something went wrong')
  }
}

// Logic to approve all shifts
const approveAllShifts = async (req, res) => {
  // I'm put everything in a try-catch block because I'm paranoid
  try {
    // 1. Get the business Id from the jwt payload
    const businessId = '123' // TODO: Change this to businessId = req.user.businessId after the authorize middleware has been added

    // 2. Search for all shifts that have that businessId
    const allShifts = await Shift.find()
      // .and([ { business: businessId }, { status: 'pending' } ])
      .and([ { status: 'pending' } ]) // TODO: Hacky workaround: Remove this line, replace with one above

    // 3. If no shifts are found, send back 404 error (resource not found)
    if (allShifts.length === 0) {
      return res.status(404).send('No Shifts Found')
    }

    // 4. Update the shift statuses to approved
    await allShifts.forEach((shift) => {
      shift.set({
        status: 'approved'
      })
      shift.save()
    })

    // 5. Send back a confirmation message
    return res.send('All Shifts Approved')
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

    // 5. Update the shift status to approved
    shift.set({ // 2. Update the movie
      status: 'rejected'
    })
    const updatedShift = await shift.save()

    // 6. Send back the updated shift
    res.send(updatedShift)
  } catch (error) {
    res.status(500).send('Something went wrong')
  }
}

// Logic to get all of the business' shifts
const getAllShifts = async (req, res) => {
  // I'm put everything in a try-catch block because I'm paranoid
  try {
    // 1. Extract business id from the jwt payload
    const businessId = '5b53377c46556409ebbad3bc' // TODO: Change this to businessId = req.user.businessId after the authorize middleware has been added

    // 2. Search for all shifts that have that businessId
    const allShifts = await Shift.find()
      // .and([ { business: businessId } ]) // TODO: Hacky workaround: Uncomment this line
      .populate('employee')

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
  getAllShifts
}
