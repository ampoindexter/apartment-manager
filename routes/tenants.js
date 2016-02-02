'use strict';

var express = require('express');
var router = express.Router();

var Tenant = require('../models/tenant');
var Apartment = require('../models/apartment');


/* GET tenants listing. */
router.get('/', function(req, res) {
  Tenant.find({}, function(err, tenants) {
    res.status(err ? 400 : 200).send(err || tenants);
  });
});

// router.get('/', function(req, res) {

// //cade code
//   if(req.query.sort) {
//     var sortObj = {};
//     sortObj[req.query.sort] = req.query.desc ? -1 : 1;
//   }

//   if(req.query.limit) {
//     var limit = parseInt(req.query.limit);
//   }

//   delete req.query.sort;
//   delete req.query.desc;
//   delete req.query.limit;

//   Tenant.find(req.query).limit(limit).sort(sortObj).exec(function(err, tenants) {
//     res.status(err ? 400 : 200).send(err || tenants);
//   });
// });

router.get('/', function(req, res) {
  Tenant.findOne({}), function(err, tenant) {
    console.log(tenant);
    res.status(err ? 400 : 200).send(err || tenant);
  };
});

//remove a tenant
//add a tenant - update apartment

//qualifiers 
//tenant doesn't exist on other list
//totalRooms vs. tenants.length

//*remove occupied rooms from database

// //found one apartment and one tenant
// apartment // find in a separate findOne
// tenant // find in a separate findOne

// apartment.tenant = tenant._id; //putting the tenant id in apartment Schema
// //need to save apartment to persist
// apartment.save()
// /////
// ///other part is population - get the apartment while making it a full tenant object inside
// Apartment.findOne({.....}).populate('tenants') //to create an array of documents - a combined query
// .exec(function(err, apartment) {
//   // Tenant.findById(apartment.tenant, ) , not sure...
// })


//same route different query strings - as many or as few
router.post('/', function(req, res) {
  Tenant.create(req.body, function(err, tenant) {
    // console.log(req.body);
    res.status(err ? 400 : 200).send(err || tenant);
  });
});



module.exports = router;