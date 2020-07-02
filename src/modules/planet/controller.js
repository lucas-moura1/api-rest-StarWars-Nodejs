const Planet = require('./model')
const getCountFilms = require('../../utils/requestStartWarsApi')

module.exports = {
  async list (req, res) {
    await Planet.find().lean().exec()
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.status(409).json({ error: err.message })
        res.end()
      })
  },

  async findPanetById (req, res) {
    const planetId = req.params.id

    Planet.findById(planetId).lean().exec()
      .then(data => {
        if (data !== null) {
          res.json(data)
        } else res.status(409).json({ error: 'Document not found' })
      })
  },

  async findPlanetByName (req, res) {
    const planetName = req.params.name

    Planet.find({ name: planetName }).lean().exec()
      .then(data => {
        if (data.length !== 0) {
          res.json(data)
        } else res.status(409).json({ error: 'Document not found' })
      })
  },

  async create (req, res) {
    try {
      const planet = new Planet({
        name: req.body.name,
        weather: req.body.weather,
        ground: req.body.ground
      })

      const numberOfFilms = await getCountFilms(planet.name)

      planet.numberOfFilms = numberOfFilms

      const result = await planet.save()

      res.status(200).json(result)
    } catch (err) {
      res.status(err.statusCode || 409).json({ error: err.message })
      res.end()
    }
  },

  async updateById (req, res) {
    try {
      const planetId = req.params.id
      const planetBody = req.body
      console.log(req.body)

      const result = await Planet.findOneAndUpdate({ _id : planetId }, planetBody)

      res.status(200).json(result)
    } catch (err) {
      res.json({ error: err.message })
    }
  },

  async delete (req, res) {
    const planetName = req.params.name

    Planet.deleteOne({ name: planetName }).exec()
      .then(data => {
        if (data.deletedCount !== 0) {
          res.json({
            success: true,
            deletedCount: data.deletedCount
          })
        } else {
          res.json({
            success: false,
            deletedCount: data.deletedCount
          })
        }
      })
  }
}
