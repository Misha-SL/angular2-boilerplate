var express = require('express');

var app = module.exports = express.Router();

app.get('/version', function(req, res) {
  var versionInfo = { version: "1.0" };
  res.status(200).send(JSON.stringify(versionInfo));
});
