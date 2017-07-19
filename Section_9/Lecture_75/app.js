/*
  Middleware - code that sits between two layers of software.
*/

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

// Express static middleware usage
app.use('/assets', express.static(`${__dirname}/public`));

/*
  app.use is just a function that matches a route and takes
  a function as second argument, which is a middleware that
  handles the request and the response.
*/
app.use('/', function(req, res, next) {
  console.log(`Request URL: ${req.url}`);
  next();
});

app.get('/', function(req, res) {
  res.send(`<html>
    <head>
      <link href="assets/styles.css" rel="stylesheet">
    </head>
    <body>
      <h1>Hello world!</h1>
    </body>
    </html>`);
});

app.get('/person/:id', function(req, res) {
  res.send(`<html><head></head><body><h1>Person: ${req.params.id}</h1></body></html>`);
});

app.get('/api', function(req, res) {
  res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);
