const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ShiftSchema = new Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  },
  date: Date,
  location: String,
  startTime: Number, // Expressed as minutes after midnight
  endTime: Number, // Expressed as minutes after midnight
  standardMinutes: Number,
  overtimeMinutes: Number,
  doubleTimeMinutes: Number,
  totalPay: Number, // cents
  status: {
    type: String,
    default: 'pending'
  },
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business'
  }
})

const Shift = mongoose.model('Shift', ShiftSchema)

const statuses = [
  'pending',
  'approved',
  'rejected',
  'archived'
]

module.exports = {
  Shift
}
