var http = require('http');
var fs = require('fs');

/*
  req - represents the request
  res - represents the stream, where it is possible to stream
        the response back.

  Template - text designed to be the basis for final text or
             content after being processed.
*/

http.createServer(function(req, res) {
  var html = fs.readFileSync(`${__dirname}/index.html`, 'utf8');
  var message = 'Hello world!!!';

  html = html.replace('{Message}', message);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);

}).listen(1337, '127.0.0.1'); /* Mapping to the port with the listen method
                                 with port and address. */
