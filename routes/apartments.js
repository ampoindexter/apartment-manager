'use strict';

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Tenant = require('../models/tenant');
var Apartment = require('../models/apartment');

// router.get('/', function(req, res, next) {
//   res.render('apartments', { title: 'Property Manager'});
// });

/* GET apartments listing. */
router.get('/', function(req, res) {
  Apartment.find({}, function(err, apartments) {
    res.status(err ? 400 : 200).send(err || apartments);
  });
});

router.get('/', function(req, res) {
  Apartment.find(function(err, apartment){
    if(err) return res.status(400).send(err);
    res.render('apartment', {title: 'Property Manager', arr: apartment || [] });
  });
});

// router.get('/', function(req, res) {
//   console.log('Working!');
//   Apartment.findById(req.apartment._id, function(err, apartment) {
//     console.log(apartment);
//     var arr = [];
//     arr.push(apartment);
//     res.render('apartments', {arr: apartment});
//   });
// });

// router.get('/', function(req, res) {
//   Apartment.findOne({}), function(err, apartment) {
//     console.log(apartment);
//     res.status(err ? 400 : 200).send(err || apartment);
//   };
// });

//same route different query strings - as many or as few
router.post('/', function(req, res) {
  Apartment.create(req.body, function(err, apartment) {
    console.log(req.body);
    res.status(err ? 400 : 200).send(err || apartment);
  });
});



module.exports = router;

  // {
  //   "imageUrl": "chrome-search://local-ntp/images/google_logo.png@2x",
  //   "totalRooms": 3,
  //   "occupiedRooms": 1,
  //   "rent": 850,
  //   "tenants": []
  // }