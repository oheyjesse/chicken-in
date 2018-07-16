const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EmployeeSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String, // randomly generate a password upon creation and send emial to employee
  location: String,
  standardRate: Number, // cents
  business: {
    // type: mongoose.Schema.Types.ObjectId, // Commented out for early testing
    // ref: 'Business'
    type: String // Remove this, uncomment next 2 lines
  },
  dateCreated: {
    type: 'Date',
    default: Date.now,
    required: true
  }
})

const Employee = mongoose.model('Employee', EmployeeSchema)

module.exports = {
  Employee
}
