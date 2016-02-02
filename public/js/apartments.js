'use strict';

$(document).ready(init);

function init() {
  showApartments();
}

var apartment;

function showApartments() {
apartment = {totalRooms: apartment.totalRooms, rent: apartment.rent, tenants: apartment.tenants};
  console.log(apartment);
  $.post('/apartments', apartment, function(data) {
    document.location.reload();
  });
}