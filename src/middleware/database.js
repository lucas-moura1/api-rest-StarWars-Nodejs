const mongoose = require('mongoose')
const { databaseConfig, databaseUrl } = require('../config/index')

module.exports = app => {
  mongoose
    .connect(databaseUrl, databaseConfig)
    .then(console.log('MongoDB connected')
    )
    .catch(err => {
      console.error(err)
      process.exit(1)
    })

  return (ctx, next) => {
    return next()
  }
}
