var express = require('express');

var app = module.exports = express.Router();

//anonymus
app.use('/api', require('./anonymous-routes'));
app.use('/api', require('./user-routes'));
//protected
app.use('/api', require('./protected-routes'));