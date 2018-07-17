// import model for use in controller functions
const { Employee } = require('../models/Employee')

const getAllEmployees = (req, res) => {
  Employee.find({ 'active': { $ne: false } })
    .then(employees => {
      res.status(200).json(employees)
    })
    .catch(err => {
      res.status(400).json({
        err: err.message
      })
    })
}

const getEmployee = (req, res) => {
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

const editEmployee = (req, res) => {
  const {firstName, lastName, email, password, location,
    standardRate } = req.body

  Employee.findOneAndUpdate({'_id': req.params.id}, {'$set': {
    'firstName': firstName,
    'lastName': lastName,
    'email': email,
    'password': password,
    'location': location,
    'standardRate': standardRate
  }}, {new: true})
    .then(employee => {
      console.log(employee)
      res.status(200).json(employee)
    })
    .catch(err => {
      res.status(400).json({
        err: err.message
      })
    })
}

// TODO: Change status from Boolean to false 
const deleteEmployee = (req, res) => {
  Employee.findOneAndUpdate({'_id': req.params.id}, {'$set': {
    'active': false
  }}, {new: true})
    .then(employee => {
      console.log(employee)
      res.status(200).json(employee)
    })
    .catch(err => {
      res.status(400).json({
        err: err.message
      })
    })
}
// export all controller functions required by router
module.exports = {
  getAllEmployees,
  getEmployee,
  createEmployee,
  editEmployee,
  deleteEmployee
}
