const express = require('express');
var app = express();
var bodyParser = require('body-parser');
const path = require('path');
var http = require('http').Server(app);
const { Position } = require('./models');

require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

http.listen(port, '0.0.0.0', function () {
  console.log('Listening on port ' + port);
});

app.get('/api/v1/positions', function(req, res){
  Position.findAll().then(positions => res.send(positions))
    .catch(err => {
      console.error(err);
      return res.sendStatus(500);
    })
})

app.post('/api/v1/positions', function(req, res){
  Position.create(req.body).then(position => res.send(position))
    .catch(err => {
      console.error(err);
      return res.sendStatus(500);
    })
})

app.put('/api/v1/positions/:id', function(req, res){
  Position.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(results => res.sendStatus(200))
    .catch(err => {
      console.error(err);
      return res.sendStatus(500);
    })
})

app.delete('/api/v1/positions/:id', function(req, res){
  Position.destroy({
    where: {
      id: req.params.id
    }
  }).then(results => res.sendStatus(200))
    .catch(err => {
      console.error(err);
      return res.sendStatus(500);
    })
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});