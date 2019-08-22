const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api', { useNewUrlParser: true });

var customerSchema = new mongoose.Schema({
    nome: String,
    clima: String,
    terreno: String
},
    {versionKey: false}
);

module.exports = { Mongoose: mongoose, CustomerSchema: customerSchema }