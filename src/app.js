const bodyParser = require('body-parser')
const express = require('express')
const logger = require('morgan')

const config = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(logger('combined'))

require('./routes')(app)

app.set('port', config.server.port)

module.exports = app
