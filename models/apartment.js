'use strict';

var mongoose = require('mongoose');

var Apartment;

var apartmentSchema = new mongoose.Schema({
  imageUrl: { type: String },
  occupiedRooms: { type: Number },
  rooms: { type: Number },
  rent: { type: Number },
  tenants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tenant" }]
});

Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;

