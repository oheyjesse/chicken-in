const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ShiftSchema = new Schema({
  // employee: {                                // Uncomment this once employee model is made
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Employee'
  // },
  employee: String,                             // Remove this when employee model is made
  date: Date,
  location: String,
  startTime: Number,
  endTime: Number,
  standardMinutes: Number,
  overtimeMinutes: Number,
  doubleTimeMinutes: Number,
  totalPay: Number, // cents
  status: {
    type: String,
    default: 'pending'
  },
  // business: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Business'
  // }
  business: String // Remove this when business model is made
})

const Shift = mongoose.model('Shift', ShiftSchema)

const statuses = [
  'pending',
  'approved',
  'rejected',
  'rejected-dismissed'
]

module.exports = {
  Shift
}
