/*
  Environment variables - variables specific to the environment
                          our code is living in.
*/

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

/*
  passing data to URLs with pattern matching
  The passed params will be available under req.params
*/
app.get('/person/:id', function(req, res) {
  res.send(`<html><head></head><body><h1>Person: ${req.params.id}</h1></body></html>`);
});

app.get('/api', function(req, res) {
  res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);
