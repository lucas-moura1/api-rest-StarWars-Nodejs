const mongoose = require('mongoose')

const planetSchema = new mongoose.Schema({
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
  },
  quantidadeDeFilmes: {
    type: Number,
    required: false
  }
},
{ versionKey: false }
)

module.exports = mongoose.model('planet', planetSchema)
