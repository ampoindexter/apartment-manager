'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Tenant = require('../models/tenant');
var Apartment = require('../models/apartment');


/* GET tenants listing. */
router.get('/', function(req, res) {
  Tenant.find({}, function(err, tenants) {
    res.status(err ? 400 : 200).send(err || tenants);
  });
});

router.get('/:tenantId', function(req, res) {
  Tenant._id = req.params.tenantId;
  console.log(Tenant._id);
  Tenant.findById(Tenant._id, function(err, tenant) {
    res.status(err ? 400 : 200).send(err || tenant);
  });
});

module.exports = router;