const express = require('express')
const router = express.Router()
const planet_model = require('../../config/db')

router.get('/planet', (req, res) => {
  planet_model.find({}).lean().exec()
    .then(data => {   
      res.json(data)

    }).catch(err => {
      res.status(409).json({ error: err.message})
      res.end()
    })  
})

router.get('/planet/nome/:nome', (req, res) => {
  planetName = req.params.nome
  planet_model.find({ nome: planetName}).lean().exec()
    .then(data => {
      if (data.length !== 0)
        res.json(data)
      else
        res.status(409).json({ error: 'Document not found'})
    })
  })  

router.get('/planet/id/:_id', async (req, res) => {
  id = req.params._id
  planet_model.findById(id).lean().exec()
    .then(data => {
      if (data !== null)
        res.json(data)
      else   
        res.status(409).json({ error: 'Document not found'})
  })
})

router.post('/planet/create', (req, res) => {
  const planet = new planet_model ({ 
                                    nome : req.body.nome, 
                                    clima : req.body.clima, 
                                    terreno : req.body.terreno})
  console.log(planet);
  
  planet.save()
    .then(() => {
      res.json(planet)

    }).catch( err => {
      res.status(409).json({ error: err.message});
      res.end()
    })
  })

router.delete('/planet/del/nome/:nome', (req, res) => {
  planet_name = req.params.nome
  planet_model.deleteOne({ nome: planet_name }).exec() 
    .then(data => {
      if (data.deletedCount != 0)
        res.json({ 
                  success: true,
                  deletedCount: data.deletedCount })
      else 
        res.json({ 
                  success: true,
                  deletedCount: data.deletedCount })
    })
})

module.exports = router
