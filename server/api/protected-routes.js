var express = require('express'),
    jwt     = require('express-jwt'),
    config  = require('../common/config');

var app = module.exports = express.Router();

var jwtCheck = jwt({
  secret: config.secret
});

app.use('/', jwtCheck);

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send(JSON.stringify({
      status: 401,
      message: "No Authorization header was found"
    }));
  }
});

app.get('/info', function(req, res) {
  res.status(200).send("This is protected text available only for authenticated user");
});
