const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ShiftSchema = new Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  },
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
  dateCreated: {
    type: Date,
    default: Date.now,
    required: true
  }
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
