const express = require('express')
const app = express()
const router = express.Router()

const planets = require('./modules/planet/routes')

app.use(planets)

// router.get('/', (req, res) => {
//   res.send('Ok')
// })

// router.use('/api', app.route())

module.exports = app

