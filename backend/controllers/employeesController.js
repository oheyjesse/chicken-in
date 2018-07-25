// import model for use in controller functions
require('dotenv').config()
const { Employee } = require('../models/Employee')
const { Business } = require('../models/Business')
const bcrypt = require('bcryptjs')

// Function to get all the employees
const getAllEmployees = (req, res) => {
  // 1. Get business Id from jwt payload
  let businessId = ''
  if (process.env.NODE_ENV === 'development') {
    businessId = '5b5037d551abab867ccd4e13' // TODO: Delete? This is only to allow for development
  } else {
    businessId = req.user.businessId
  }

  // 2. Find the employees with the same businessId and where the active is true
  if (process.env.NODE_ENV === 'development') {
    Employee.find()
      .and([{ 'active': { $ne: false } }]) // TODO: Delete? This is only to allow for development
      .then(employees => {
        // 3. If no employees are found, send back 404 error (resource not found)
        if (employees.length === 0) {
          return res.status(404).send('No Employees Found')
        }

        // 4. If employees are found, send back the employees
        res.status(200).json(employees)
      })
      .catch(err => {
        return res.status(400).json({
          err: err.message
        })
      })
  } else {
    Employee.find()
      .and([{ 'active': { $ne: false } }, {business: businessId}])
      .then(employees => {
        // 3. If no employees are found, send back 404 error (resource not found)
        if (employees.length === 0) {
          return res.status(404).send('No Employees Found')
        }

        // 4. If employees are found, send back the employees
        res.status(200).json(employees)
      })
      .catch(err => {
        return res.status(400).json({
          err: err.message
        })
      })
  }
}

// TODO: What is this route supposed to handle?
const getEmployee = (req, res) => {
  // 1. Find employee by Id from the URL params
  Employee.findById(req.params.id)
    .then(foundEmployee => {
      res.status(200).json(foundEmployee)
    })
    .catch(err => {
      res.status(400).json({
        err: err.message
      })
    })
}

// Functionality to create an employee
const createEmployee = async (req, res) => {
  try {
    // 1. Extract properties from req.body
    const {firstName, lastName, email, locations,
      standardRate } = req.body

    // 2. Get business Id from jwt payload
    let businessId = ''
    if (process.env.NODE_ENV === 'development') {
      businessId = '5b5037d551abab867ccd4e13' // TODO: Delete? This is only to allow for development
    } else {
      businessId = req.user.businessId
    }

    // 3. Generate random password
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(process.env.EMPLOYEE_PASSWORD, salt)

    // 4. Create employeeJson
    let employeeJson = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      locations: locations,
      standardRate: standardRate,
      business: businessId
    }

    // 4. Create new employee from employeeJson
    const newEmployee = new Employee(employeeJson)

    if (req.user.isDemo) { // TODO: If the user is a demo, return a success response without updating the database
      return res.status(200).json(newEmployee)
    } else {
      // 5. Save the new employee to the database
      const savedEmployee = await newEmployee.save()

      // 6. Send back the saved employee
      res.status(200).json(savedEmployee)
    }
  } catch (err) {
    res.status(400).json({
      err: err.message
    })
  }
}

// Logic to edit employee information
const editEmployee = (req, res) => {
  // 1. Extract properties from req.body
  const {firstName, lastName, email, locations,
    standardRate } = req.body

  if (req.user.isDemo) { // TODO: If the user is a demo, return a success response without updating the database
    // 2. Find the employee
    Employee.findById(req.params.id)
      .then(employee => {
      // 3. If no employee is found, send back 404 (resource not found)
        if (employee === null) {
          return res.status(404).send('Employee Not Found')
        }

        // If found, send back the employee
        employee.firstName = firstName
        employee.lastName = lastName
        employee.fullName = `${firstName} ${lastName}`
        employee.email = email
        employee.locations = locations
        employee.standardRate = standardRate
        return res.status(200).json(employee)
      })
      .catch(err => {
        res.status(400).json({
          err: err.message
        })
      })
  } else {
    // 2. Find the employee and update their information
    Employee.findOneAndUpdate({'_id': req.params.id}, {'$set': {
      'firstName': firstName,
      'lastName': lastName,
      'fullName': `${firstName} ${lastName}`,
      'email': email,
      'locations': locations,
      'standardRate': standardRate
    }}, {new: true})
      .then(employee => {
        // 3. If no employee is found, send back 404 (resource not found)
        if (employee === null) {
          return res.status(404).send('Employee Not Found')
        }

        // If found, send back the updated employee
        return res.status(200).json(employee)
      })
      .catch(err => {
        res.status(400).json({
          err: err.message
        })
      })
  }
}

// Logic to change employee 'active' property from 'true' to 'false'
// /api/employees/:id
const deleteEmployee = (req, res) => {
  if (req.user.isDemo) { // TODO: If the user is a demo, return a success response without updating the database
    console.log('isDemo')
    // 1. Find the employee
    Employee.findById(req.params.id)
      .then(employee => {
      // 2. If no employee is found, send back 404 (resource not found)
        if (employee === null) {
          return res.status(404).send('Employee Not Found')
        }

        // If found, send back the employee
        // employee.active = 'false'
        return res.status(200).send(employee)
      })
      .catch(err => {
        return res.status(400).json({
          err: err.message
        })
      })
  } else {
    // 1. Find the employee and update the active 'property' to 'false'
    Employee.findOneAndUpdate({'_id': req.params.id}, {'$set': {
      'active': false
    }}, {new: true})
      .then(employee => {
        // 2. If no employee is found, send back 404 (resource not found)
        if (employee === null) {
          return res.status(404).send('Employee Not Found')
        }

        // 3. If employee is found, send back the updated employee
        return res.status(200).json(employee)
      })
      .catch(err => {
        res.status(400).json({
          err: err.message
        })
      })
  }
}
// export all controller functions required by router
module.exports = {
  getAllEmployees,
  getEmployee,
  createEmployee,
  editEmployee,
  deleteEmployee
}
