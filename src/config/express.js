const express = require('express')
const cors = require('cors')
const routes = require('../routes')
const loggerMiddleware = require('../middleware/logger')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(loggerMiddleware)
app.use(routes)

app.use((req, res, next) => {
    return res.status(404).json({ error: 'Route not found' })
})

app.use((err, req, res, next) => {
    return res.status(err.statusCode).json({ error: err.message })
})

module.exports = app
