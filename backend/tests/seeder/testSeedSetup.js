require('dotenv').config()
const mongoose = require('mongoose')
const moment = require('moment')
const bcrypt = require('bcryptjs')
const { Business } = require('../../models/Business')
const { Manager } = require('../../models/Manager')
const { Employee } = require('../../models/Employee')
const { Shift } = require('../../models/Shift')
const { calculateTime } = require('../../seed/calculateTime')

const request = require('supertest')
const app = require('../../server.js').app // app for running requests through
const server = require('../../server.js').server // server instance, so we can close it after

const generateBusiness = async () => {
  return (
    new Business({
      name: 'The Test Database',
      address: '123 Test Drive',
      locations: ['Test Town', 'Testville', 'Teston', 'Mt Test'],
      overtimeMultiplier: 1.5,
      doubleTimeMultiplier: 2.0
    })
  )
}

// const generateManager = async (email, password, businessID) => {
//   const salt = await bcrypt.genSalt(10)
//   const hashedPassword = await bcrypt.hash(password, salt)

//   return (
//     new Manager({
//       email: email,
//       password: hashedPassword,
//       business: businessID
//     })
//   )
// }

// const generateEmployees = async (password, businessID, businessLocations) => {
//   const salt = await bcrypt.genSalt(10)
//   const hashedPassword = await bcrypt.hash(password, salt)

//   // 3. Generate employees
//   return (
//     [
//       new Employee({ // Test Employee
//         firstName: 'Steven',
//         lastName: 'Salad',
//         email: 'steve@salad.com',
//         password: hashedPassword,
//         locations: [
//           businessLocations[Math.floor(Math.random() * businessLocations.length)],
//           businessLocations[Math.floor(Math.random() * businessLocations.length)],
//           businessLocations[Math.floor(Math.random() * businessLocations.length)]
//         ],
//         standardRate: 3750, // cents
//         business: businessID
//       })
//     ]
//   )
// }

// const generateShifts = async (employeesArray, businessID) => {
//   const statuses = ['approved', 'approved', 'approved', 'approved', 'approved', 'approved', 'approved', 'approved', 'approved', 'approved', 'approved', 'approved', 'pending', 'pending', 'pending', 'rejected', 'archived']

//   const shiftsArray = []
//   for (let i = 0; i < 500; i++) {
//     let randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)]

//     let startTime = Math.ceil(Math.random() * 1000)
//     let endTime = startTime + Math.ceil(Math.random() * 1000)

//     let shiftDate = moment().add(7, 'days').subtract(Math.floor(Math.random() * 28), 'days')

//     let { standardMinutes, overtimeMinutes, doubleTimeMinutes, totalPay } = calculateTime(shiftDate, startTime, endTime, randomEmployee.standardRate, 1.5, 2)

//     let newShift = new Shift({
//       employee: randomEmployee._id,
//       date: shiftDate,
//       location: randomEmployee.locations[Math.floor(Math.random() * randomEmployee.locations.length)],
//       startTime: startTime,
//       endTime: endTime,
//       standardMinutes: standardMinutes,
//       overtimeMinutes: overtimeMinutes,
//       doubleTimeMinutes: doubleTimeMinutes,
//       totalPay: totalPay,
//       status: statuses[Math.floor(Math.random() * statuses.length)],
//       business: businessID
//     })

//     shiftsArray.push(newShift)
//   }

//   // 2. Return shifts
//   return shiftsArray
// }

const runSeeder = async () => {
  try {
    // 3. Seed business
    const business = await generateBusiness()
    const savedBusiness = await business.save()

    // 4. Get business Id
    const businessID = savedBusiness._id

    // // 5. Seed manager
    // const manager = await generateManager('ed@redrocks.com', 'testpassword', businessID) // Finalize manager details
    // const savedManager = await manager.save()

    // const demoManager = await generateManager('steve@redrocks.com', 'testpassword', businessID) // Demo manager
    // await demoManager.save()

    // // 6. Seed employees and fill array with employee Ids
    // const employeesArray = await generateEmployees('testpassword', businessID, savedBusiness.locations)
    // const savedEmployeesArray = []
    // for (let i = 0; i < employeesArray.length; i++) {
    //   const employee = await employeesArray[i].save()
    //   savedEmployeesArray.push(employee)
    // }

    // // 7. Seed shifts
    // const shiftsArray = await generateShifts(savedEmployeesArray, businessID)
    // let done = 0
    // for (let i = 0; i < shiftsArray.length; i++) {
    //   await shiftsArray[i].save()
    //   done++
    //   if (done === shiftsArray.length) {
    //     // 7. Disconnect from database
    //     console.log('All data seeded successfully!')
    //   }
    // }

    console.log('testSeeder Seeded! 🙌')
    server.close()

  } catch (error) {
    console.error('💥 ❌ TEST SEEDING ERROR')
    console.log(`Error Details: ${error}`)
    process.exit()
  }
}

const testSeeder = () => {
  console.log('testSeeder GO! 🏁')
  app.on('started', runSeeder) // only run seed after db connected
}

module.exports = testSeeder
