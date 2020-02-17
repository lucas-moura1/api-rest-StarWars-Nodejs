const mongoose = require('mongoose')

module.exports = app => {
    mongoose
        .connect('mongodb://localhost/planet', { 
            useCreateIndex: true, 
            useNewUrlParser: true,
            useFindAndModify: false })
        .then(console.log(`MongoDB connected`)
        )
        .catch(err => {
            console.error(err)
            process.exit(1)
        })

    return (ctx, next) => {
        return next()
    }
}
