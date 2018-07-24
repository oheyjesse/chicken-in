const request = require('supertest') // to send requests
const app = require('../../server.js').app // app for running requests through
const server = require('../../server.js').server // server instance, so we can close it after

// ---------------------------------------------------------------- Server Setup
beforeAll(done => {
  server.close() // close old instances
  app.on('started', done) // only run tests after db connected
})

// close server after tests complete
afterAll(done => {
  server.close()
  done()
})

// ----------------------------------------------------------------- Begin Tests
// Route Tests
describe('Basic Route Testing', () => {
  it('should GET /test/ with 200 OK', (done) => {
    request(app)
      .get('/test/')
      .set('Accept', 'application/json')
      .expect(200, done)
  })

  it('should GET /shifts/testroute/ with 200 OK', (done) => {
    request(app)
      .get('/api/shifts/testroute')
      .set('Accept', 'application/json')
      .expect(200, done)
  })
})
