const express = require('express')
const app = express()

const planets = require('./modules/planet/routes')
const auth = require('./modules/auth/routes')

app.use(planets)
app.use(auth)
// router.get('/', (req, res) => {
//   res.send('Ok')
// })

// router.use('/api', app.route())

module.exports = app
