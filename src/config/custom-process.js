const express = require('express')
const path = require('path')
const logger = require('morgan')

const routes = require('../app/routes/routes')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)

app.use(function(req, res, next) {
  return res.status(404).json({ error: err.message })
})

app.use(function(err, req, res, next) {
  return res.status(500).json({ error: err.message })
})

module.exports = app
