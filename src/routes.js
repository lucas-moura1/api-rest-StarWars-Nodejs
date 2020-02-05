const express = require('express')
const router = express.Router()

const planets = require('./modules/planet/routes')

router.get('/', (req, res) => {
  res.send('Ok')
})

module.exports = router

