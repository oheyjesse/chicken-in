// import model for use in controller functions
const { Employee } = require('../models/Employee')

const getAllEmployees = (req, res) => {
  Employee.find()
    .then(employees => {
      res.status(200).json(employees)
    })
    .catch(err => {
      res.status(400).json({
        err: err.message
      })
    })
}

const createEmployee = (req, res) => {
  const {firstName, lastName, email, password, location,
    standardRate } = req.body

  const employeeJson = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    location: location,
    standardRate: standardRate
  }

  const newEmployee = new Employee(employeeJson)
  newEmployee.save()
    .then(newEmployee => {
      res.status(200).json(newEmployee)
    })
    .catch(err => {
      res.status(400).json({
        err: err.message
      })
    })
}