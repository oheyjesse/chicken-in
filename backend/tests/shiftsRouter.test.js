const { app } = require('../server')

describe('GET /api/', () => {
  it('responds with json', (done) => {
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})