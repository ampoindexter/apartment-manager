'use strict';

var PORT = process.env.PORT || 3000;

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/property-manager')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', require('./routes/index'));
app.use('/tenants', require('./routes/tenants'));
app.use('/apartments', require('./routes/apartments'));

// 404 handler
app.get(function(req, res) {
  res.status(404).render('404');
});

app.listen(PORT, function(){
  console.log('Listening on port ', PORT);
});
