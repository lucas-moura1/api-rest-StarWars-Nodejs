const mongoose = require('mongoose')
const { databaseConfig, databaseUrl, IS_TEST } = require('./index')

if (!IS_TEST) {
    mongoose
        .connect(databaseUrl, databaseConfig)
        .then(console.log('MongoDB connected'))
        .catch(err => {
            console.error(err)
            process.exit(1)
        })
}

module.exports = mongoose
