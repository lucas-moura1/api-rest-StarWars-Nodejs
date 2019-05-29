var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api', function(req, res, next) {
  var db = require('../db');
  var Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
  Customer.find({}).lean().exec(function(e,docs){
    res.json(docs);
    res.end();
  });  
});

router.get('/api/:nome', function(req, res, next) {
  var db = require('../db');
  var Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
  Customer.find({ nome: req.params.nome}).lean().exec(function(e,docs){
    res.json(docs);
    res.end();
  });  
});

router.get('/api/:id', function (req, res, next) {
  var db = require('../db');
  var Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
  Customer.find({ _id: req.params.id }).lean().exec(function (e, docs) {
      res.json(docs);
      res.end();
  });
});

router.post('/api/', function (req, res, next) {
  var db = require('../db');
  var Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
  var newcustomers = new Customer ({ nome : req.body.nome, clima : req.body.clima, terreno : req.body.terreno});
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

router.delete('/api/:nome', function (req, res, next) {
  var db = require('../db');
  var Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
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
