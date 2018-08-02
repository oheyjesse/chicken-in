require('dotenv').config()
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const jwt = require('jsonwebtoken')

const employeeSchema = new Schema({
  firstName: String,
  lastName: String,
  fullName: String,
  email: String,
  password: String, // randomly generate a password upon creation and send emial to employee
  locations: [String],
  standardRate: Number, // cents
  business: {
    type: mongoose.Schema.Types.ObjectId, // Commented out for early testing
    ref: 'Business'
  },
  active: {
    type: Boolean,
    default: true,
    required: true
  }
})

employeeSchema.methods.generateAuthToken = function (businessId, employeeEmail) {
  let isDemo = false
  if (employeeEmail === 'demo@redrocks.com') {
    isDemo = true
  }
  // The first argument is the PUBLIC payload, the second argument is the private key. The private key should be stored in an environment variable, not hard-coded like below.
  const token = jwt.sign({ _id: this._id, userType: 'employee', businessId: businessId, isDemo: isDemo }, process.env.JWT_KEY)
  return token
}

employeeSchema.pre('save', function () {
  this.fullName = `${this.firstName} ${this.lastName}`
})

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = {
  Employee
}
