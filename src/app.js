require('dotenv-flow').config({ path: '.env' })
const express = require('express')
const logger = require('morgan')

const app = express()

const database = require('./middleware/database')

const routes = require('./routes')

app.use(logger('dev'))
database(app)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes)

app.use(function(req, res, next) {
  return res.status(404).json({ error: 'Not found' })
})

app.use(function(err, req, res, next) {
  return res.status(500).json({ error: err.message })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

module.exports = app
