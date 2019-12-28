const express = require('express');
var app = express();
var bodyParser = require('body-parser');
const path = require('path');
var http = require('http').Server(app);
// var jwt = require('jsonwebtoken');
// var bcrypt = require('bcryptjs');

const secret = process.env.TOKEN_SECRET;
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

http.listen(port, '0.0.0.0', function () {
  console.log('Listening on port ' + port);
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});