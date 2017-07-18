/*
  Serialize: translating an object into a format that can stored of transferred.
  Examples: JSON, CSV, XML. Deserialize is the opposite.
*/

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  var obj = {
    firstname: 'John',
    lastname: 'Doe'
  };

  res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1');
