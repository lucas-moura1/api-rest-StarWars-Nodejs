const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost/planet', { 
        useCreateIndex: true, 
        useNewUrlParser: true })
    .catch(err => {
        console.error(err)
        process.exit(1)
    })

var planetSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    clima: {
        type: String,
        required: true
    },
    terreno: {
        type: String,
        required: true
    }
},
    { versionKey: false }
)

module.exports =  mongoose.model('planet', planetSchema)
