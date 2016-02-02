'use strict';

var mongoose = require('mongoose');

var Tenant;

var tenantSchema = mongoose.Schema({
  name: {
    first: { type: String },
    last: { type: String }
  },
});

Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;