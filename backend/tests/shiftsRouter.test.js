require('dotenv').config()

// 'supertest' is a testing tool that lets us send requests- Neato!
const request = require('supertest')
const devServer = `http://localhost:${process.env.SERVER_PORT}`

describe('GET /api/shifts/employee', () => {
  it('Returns response as json', (done) => {
    request(devServer)
      .get('/api/shifts/employee')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})
