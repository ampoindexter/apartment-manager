'use strict';

var mongoose = require('mongoose');

var Apartment;

var apartmentSchema = new mongoose.Schema({
  name: String,
  rent: Number,
  totalRooms: Number,
  tenants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tenant" }],
  imageUrl: String
});

Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;

