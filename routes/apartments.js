'use strict';

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Tenant = require('../models/tenant');
var Apartment = require('../models/apartment');

router.get('/', function(req, res) {
  Apartment.find(function(err, apartment){
    if(err) return res.status(400).send(err);
    res.render('apartments', {title: 'Property Manager', arr: apartment || [] });
  });
});

router.post('/', function(req, res) {
  Apartment.create(req.body, function(err, apartment) {
    console.log(req.body);
    res.status(err ? 400 : 200).send(err || apartment);
  });
});

module.exports = router;
