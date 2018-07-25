const request = require('supertest')
const app = require('../../server.js').app // app for running requests through
const server = require('../../server.js').server // server instance, so we can close it after
const { Business } = require('../../models/Business')

// ---------------------------------------------------------------- Server Setup
let testBusiness

beforeAll(async (done) => {
  server.close() // close old instances

  app.on('started', () => {
    testBusiness = new Business({
      name: 'The Test Database',
      address: '123 Test Drive',
      locations: ['Test Town', 'Testville', 'Teston', 'Mt Test'],
      overtimeMultiplier: 1.5,
      doubleTimeMultiplier: 2.0
    })
    testBusiness.save()
      .then(() => {
        console.log('🛢 ✅ Test Business Seeded')
        done()
      })
      .catch((err) => {
        console.log(err)
      })
  })
})

// close server after tests complete
afterAll(done => {
  Business.deleteOne({ '_id': testBusiness.id } )
    .then(() => {
      console.log('🛢 🔪 Test Business Removed')
      server.close()
      console.log('🐔 🔪 Server Closed')
    })
    .then(() => {
      done()
    })
})

const shift = {
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
  status: 'pending',
  business: testBusiness.id
}

// ----------------------------------------------------------------- Begin Tests
// Route Tests

// GET shifts/employee | employee/dashboard DONE
// POST shifts/create | employee/dashboard DONE
// PUT shifts/archive/:id | employee/dashboard | Archive rejected shift DONE
// DELETE shifts/delete/:id | employee/dashboard | Delete pending shift DONE

// GET shifts/pending | manager/review DONE
// PUT shifts/approve/:id | manager/review DONE
// PUT shifts/approveAll | manager/review DONE
// PUT shifts/reject/:id | manager/review DONE
// GET shifts/all | manager/reports DONE

describe('Shifts Route Tests', () => {
  it('should POST a new shift', (done) => {
    request(app)
      .post('/api/shifts/create', shift)
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(done)
  })

  it('should GET shifts/all as JSON', (done) => {
    request(app)
      .get('/api/shifts/all')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(done)
  })
})

