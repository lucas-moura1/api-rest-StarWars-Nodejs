const mongoose = require('mongoose')

const planetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  weather: {
    type: String,
    required: true
  },
  ground: {
    type: String,
    required: true
  },
  numberOfFilms: {
    type: Number,
    required: true
  }
},
{ versionKey: false }
)

module.exports = mongoose.model('planet', planetSchema)
