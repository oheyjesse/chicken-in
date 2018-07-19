require('dotenv').config()
const mongoose = require('mongoose')
const moment = require('moment')
const bcrypt = require('bcryptjs')
const { Business } = require('../models/Business')
const { Manager } = require('../models/Manager')
const { Employee } = require('../models/Employee')
const { Shift } = require('../models/Shift')

/// //////////////////////////////////
/// // generateBusiness function /////
/// //////////////////////////////////
const generateBusiness = async () => {
  // 1. Generate businesses
  const business = new Business({ // TODO: Finalize business details
    name: 'Red Rocks Charcoal Chicken',
    address: '123 Fake Street',
    locations: ['Melbourne', 'Sydney', 'Perth', 'Brisbane', 'Darwin', 'Hobart', 'Donvale', 'Mitcham', 'Hawthorn', 'Sunshine'],
    overtimeMultiplier: 1.5,
    doubleTimeMultiplier: 2.0
  })

  // 2. Return businesses
  return business
}

/// //////////////////////////////////
/// // generateManager function //////
/// //////////////////////////////////
const generateManager = async (email, password, businessId) => {
  // 1. Generate the salt
  const salt = await bcrypt.genSalt(10)

  // Create the hashed password
  const hashedPassword = await bcrypt.hash(password, salt)

  // 2. Generate manager
  const newManager = new Manager({
    email: email,
    password: hashedPassword,
    business: businessId
  })

  // 3. Return new manager
  return newManager
}

/// ////////////////////////////////////
/// // generateEmployees function //////
/// ////////////////////////////////////
const generateEmployees = async (password, businessID, businessLocations) => {
  // 1. Generate the salt
  const salt = await bcrypt.genSalt(10)

  // 2. Create the hashed password
  const hashedPassword = await bcrypt.hash(password, salt)
  const demoHashedPassword = await bcrypt.hash('password', salt)

  // 3. Generate employees
  const employeesArray = [ // TODO: Finalize employee data
    new Employee({ // Demo Employee
      firstName: 'Demo',
      lastName: 'Account',
      email: 'demo@redrocks.com',
      password: demoHashedPassword,
      locations: [
        businessLocations[Math.floor(Math.random() * businessLocations.length)],
        businessLocations[Math.floor(Math.random() * businessLocations.length)],
        businessLocations[Math.floor(Math.random() * businessLocations.length)]
      ],
      standardRate: 2000, // cents
      business: businessID
    }),
    new Employee({
      firstName: 'Steven',
      lastName: 'Salad',
      email: 'steve@redrocks.com',
      password: hashedPassword,
      locations: [
        businessLocations[Math.floor(Math.random() * businessLocations.length)],
        businessLocations[Math.floor(Math.random() * businessLocations.length)],
        businessLocations[Math.floor(Math.random() * businessLocations.length)]
      ],
      standardRate: 2000, // cents
      business: businessID
    }),
    new Employee({
      firstName: 'Maggie',
      lastName: 'Mallad',
      email: 'maggie@redrocks.com',
      password: hashedPassword,
      locations: [
        businessLocations[Math.floor(Math.random() * businessLocations.length)],
        businessLocations[Math.floor(Math.random() * businessLocations.length)],
        businessLocations[Math.floor(Math.random() * businessLocations.length)]
      ],
      standardRate: 2000, // cents
      business: businessID
    }),
    new Employee({
      firstName: 'Kurt',
      lastName: 'Cobain',
      email: 'kurt@redrocks.com',
      password: hashedPassword,
      locations: [
        businessLocations[Math.floor(Math.random() * businessLocations.length)],
        businessLocations[Math.floor(Math.random() * businessLocations.length)],
        businessLocations[Math.floor(Math.random() * businessLocations.length)]
      ],
      standardRate: 2000, // cents
      business: businessID
    }),
    new Employee({
      firstName: 'Jeff',
      lastName: 'Buckley',
      email: 'jeff@redrocks.com',
      password: hashedPassword,
      locations: [
        businessLocations[Math.floor(Math.random() * businessLocations.length)],
        businessLocations[Math.floor(Math.random() * businessLocations.length)],
        businessLocations[Math.floor(Math.random() * businessLocations.length)]
      ],
      standardRate: 2000, // cents
      business: businessID
    }),
    new Employee({
      firstName: 'Courtney',
      lastName: 'Love',
      email: 'courtney@redrocks.com',
      password: hashedPassword,
      locations: [
        businessLocations[Math.floor(Math.random() * businessLocations.length)],
        businessLocations[Math.floor(Math.random() * businessLocations.length)],
        businessLocations[Math.floor(Math.random() * businessLocations.length)]
      ],
      standardRate: 2000, // cents
      business: businessID
    }),
    new Employee({
      firstName: 'Nicole',
      lastName: 'Kidman',
      email: 'nicole@redrocks.com',
      password: hashedPassword,
      locations: [
        businessLocations[Math.floor(Math.random() * businessLocations.length)],
        businessLocations[Math.floor(Math.random() * businessLocations.length)],
        businessLocations[Math.floor(Math.random() * businessLocations.length)]
      ],
      standardRate: 2000, // cents
      business: businessID
    }),
    new Employee({
      firstName: 'Dave',
      lastName: 'Grohl',
      email: 'dave@redrocks.com',
      password: hashedPassword,
      locations: [
        businessLocations[Math.floor(Math.random() * businessLocations.length)],
        businessLocations[Math.floor(Math.random() * businessLocations.length)],
        businessLocations[Math.floor(Math.random() * businessLocations.length)]
      ],
      standardRate: 2000, // cents
      business: businessID
    }),
    new Employee({
      firstName: 'Beoynce',
      lastName: 'Knowles',
      email: 'queenbey@redrocks.com',
      password: hashedPassword,
      locations: [
        businessLocations[Math.floor(Math.random() * businessLocations.length)],
        businessLocations[Math.floor(Math.random() * businessLocations.length)],
        businessLocations[Math.floor(Math.random() * businessLocations.length)]
      ],
      standardRate: 2000, // cents
      business: businessID
    })
  ]

  // 4. Return employees
  return employeesArray
}

/// /////////////////////////////////
/// // generateShifts function //////
/// /////////////////////////////////
const generateShifts = async (employeesArray, businessId) => {
  const statuses = ['approved', 'approved', 'approved', 'approved', 'approved', 'approved', 'pending', 'pending', 'pending', 'rejected', 'archived']

  // 1. Generate shifts
  const shiftsArray = []
  for (let i = 0; i < 500; i++) {
    // Pick a random employee
    let randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)]

    // Set random start and end times
    let startTime = Math.ceil(Math.random() * 1000) // TODO: Come up with better way to generate start and end times
    let endTime = startTime + Math.ceil(Math.random() * 1000) // TODO: Come up with better way to generate start and end times

    let newShift = new Shift({
      employee: randomEmployee._id,
      date: moment().subtract(Math.floor(Math.random() * 28), 'days'),
      location: randomEmployee.locations[Math.floor(Math.random() * randomEmployee.locations.length)],
      startTime: startTime,
      endTime: endTime,
      standardMinutes: endTime - startTime, // TODO: Come up with better way to calculate standardMonutes
      overtimeMinutes: Math.ceil(Math.random() * 300), // TODO: Come up with better way to calculate standardMonutes
      doubleTimeMinutes: Math.ceil(Math.random() * 300), // TODO: Come up with better way to calculate standardMonutes
      totalPay: randomEmployee.standardRate * (endTime - startTime), // TODO: Come up with better way to calculate totalPay
      status: statuses[Math.floor(Math.random() * statuses.length)],
      business: businessId
    })

    shiftsArray.push(newShift)
  }

  // 2. Return shifts
  return shiftsArray
}

const runSeeder = async () => {
  try {
    // 1. Connect to database
    const dbURL = `${process.env.MONGO_URL}:${process.env.MONGO_PORT}/chickenin`
    console.log(`🛢  📘 MongoDB: ${dbURL}`) // Display the parsed URL in server logs
    await mongoose.connect(dbURL, { useNewUrlParser: true })
    console.log('🛢  ✅ Mongo Connection established.')

    // 2. Clear the database
    await Shift.remove(() => {
      console.log('Shifts collection removed')
    })

    await Employee.remove(() => {
      console.log('Employee collection removed')
    })

    await Manager.remove(() => {
      console.log('Manager collection removed')
    })

    await Business.remove(() => {
      console.log('Business collection removed')
    })

    // 3. Seed business
    const business = await generateBusiness()
    const savedBusiness = await business.save()

    // 4. Get business Id
    const businessId = savedBusiness._id

    // 5. Seed manager
    const manager = await generateManager('ed@redrocks.com', process.env.MANAGER_PASSWORD, businessId) // Finalize manager details
    const savedManager = await manager.save()

    const demoManager = await generateManager('demo@redrocks.com', 'password', businessId) // Demo manager
    await demoManager.save()

    // 6. Seed employees and fill array with employee Ids
    const employeesArray = await generateEmployees(process.env.EMPLOYEE_PASSWORD, businessId, savedBusiness.locations)
    const savedEmployeesArray = []
    for (let i = 0; i < employeesArray.length; i++) {
      const employee = await employeesArray[i].save()
      savedEmployeesArray.push(employee)
    }

    // 7. Seed shifts
    const shiftsArray = await generateShifts(savedEmployeesArray, businessId)
    let done = 0
    for (let i = 0; i < shiftsArray.length; i++) {
      await shiftsArray[i].save()
      done++
      if (done === shiftsArray.length) {
        // 7. Disconnect from database
        console.log('All data seeded successfully!')
        mongoose.disconnect()
      }
    }
  } catch (error) {
    console.error('💥 ❌ MONGO_CONNECT_ERROR: Have you started your mongodb?')
    console.log(`Error Details: ${error}`)
    process.exit()
  }
}

runSeeder()
