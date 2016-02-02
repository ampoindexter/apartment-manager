'use strict';

var mongoose = require('mongoose');

var Tenant;

var tenantSchema = mongoose.Schema({
  name: {
    first: { type: String },
    last: { type: String }
  },
});

// tenantSchema.statics.create = function(tenantObj, callback){
//   var tenant = new Tenant(tenantObj);
//   tenant.save(callback)
// }

// tenantSchema.statics.showAll = function(req, callback){
//   Tenant.find({}, function(err, tenants){
//     callback(err, tenants);
//   });
// }

Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;