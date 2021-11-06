const supertest = require('supertest')
const app = require('../../src/app')

test('GET /', async () => {
  const response = await supertest(app).get('/')

  expect(response.statusCode).toEqual(200)
  expect(response.text).toEqual('Hello World!')
})