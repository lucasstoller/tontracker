const express = require('express')
const app = express()
const routes = require('./routes')
const swaggerUI = require("swagger-ui-express")
const docs = require('./docs')

app.use(routes)
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs))

module.exports = app