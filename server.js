const express = require('express');
var app = express();
var bodyParser = require('body-parser');
const path = require('path');
var http = require('http').Server(app);
const { Position, Education, Project } = require('./models');

require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

http.listen(port, '0.0.0.0', function () {
  console.log('Listening on port ' + port);
});

app.get('/api/v1/positions', function(req, res){
  Position.findAll({ order: [['startDate', 'DESC']] }).then(positions => res.send(positions))
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

app.get('/api/v1/education', function(req, res){
  Education.findAll({ order: [['startDate', 'DESC']] }).then(education => res.send(education))
    .catch(err => {
      console.error(err);
      return res.sendStatus(500);
    })
})

app.post('/api/v1/education', function(req, res){
  Education.create(req.body).then(education => res.send(education))
    .catch(err => {
      console.error(err);
      return res.sendStatus(500);
    })
})

app.put('/api/v1/education/:id', function(req, res){
  Education.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(results => res.sendStatus(200))
    .catch(err => {
      console.error(err);
      return res.sendStatus(500);
    })
})

app.delete('/api/v1/education/:id', function(req, res){
  Education.destroy({
    where: {
      id: req.params.id
    }
  }).then(results => res.sendStatus(200))
    .catch(err => {
      console.error(err);
      return res.sendStatus(500);
    })
})

app.get('/api/v1/projects', async (req, res) => {
  try {
  const projects = await Project.findAll()
  
  return res.send(projects.sort(
    (a, b) => {
      if (a.hasEndDate) {
        if (b.hasEndDate) {
          if (!a.endDate) {
            if (!b.endDate) {
              return new Date(b.startDate) - new Date(a.startDate)
            }
            return -1
          }
          if (!b.endDate) {
            return 1
          }
          return new Date(b.endDate) - new Date(a.endDate)
        }
        return -1
      }
      if (b.hasEndDate) {
        return 1
      }
      return new Date(b.startDate) - new Date(a.startDate)
    }
  ));
  } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
})

app.post('/api/v1/projects', function(req, res){
  Project.create(req.body).then(project => res.send(project))
    .catch(err => {
      console.error(err);
      return res.sendStatus(500);
    })
})

app.put('/api/v1/projects/:id', function(req, res){
  Project.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(results => res.sendStatus(200))
    .catch(err => {
      console.error(err);
      return res.sendStatus(500);
    })
})

app.delete('/api/v1/projects/:id', function(req, res){
  Project.destroy({
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