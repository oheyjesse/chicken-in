const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BusinessSchema = new Schema({
  name: String,
  address: String,
  locations: [String],
  overtimeMultiplier: Number,
  doubleTimeMultiplier: Number
})

const Business = mongoose.model('Business', BusinessSchema)

module.exports = {
  Business
}
