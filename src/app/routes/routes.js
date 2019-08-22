const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/api', function(req, res, next) {
  const db = require('../db');
  const Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
  Customer.find({}).lean().exec(function(e,docs){
    res.json(docs);
    res.end();
  });  
});

router.get('/api/nome/:nome', function(req, res, next) {
  const db = require('../db');
  const Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
  Customer.find({ nome: req.params.nome}).lean().exec(function(e,docs){
    res.json(docs);
    res.end();
  });  
});

router.get('/api/id/:_id', function (req, res, next) {
  const db = require('../db');
  const Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
  Customer.findById(req.params._id, function (e, docs) {
      res.json(docs);
      res.end();
  });
});

router.post('/api/', function (req, res, next) {
  const db = require('../db');
  const Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
  const newcustomers = new Customer ({ nome : req.body.nome, clima : req.body.clima, terreno : req.body.terreno});
  newcustomers.save(function (err) {
    if (err) {
      res.status(500).json({ error: err.message});
      res.end();
      return;
    }
    res.json(newcustomers);
    res.end();
  });
});

router.delete('/api/del/nome/:nome', function (req, res, next) {
  const db = require('../db');
  const Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
  Customer.find({ nome: req.params.nome }).remove(function (err) {
      if (err) {
          res.status(500).json({ error: err.message });
          res.end();
          return;
      }
      res.json({success: true});
      res.end();
  });
});

module.exports = router;
