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

const removeBusiness = () => {
  Business.findOneAndRemove({ 'name': 'The Test Database' })
    .then((business) => {
      console.log(business.name + 'Removed.')
    })
    .catch((err) => {
      console.log(err)
    })
}

const runTeardown = async () => {
  removeBusiness()
  console.log('Test Data Torn Down. 👷‍♀️')
  server.close()
}

const teardown = () => {
  console.log('Test Data Teardown GO! 🏁')
  app.on('started', runTeardown) // only run seed after db connected
}

module.exports = teardown
