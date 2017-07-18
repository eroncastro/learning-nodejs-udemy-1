var http = require('http');

/*
  req - represents the request
  res - represents the stream, where it is possible to stream
        the response back.
*/
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  res.end('Hello world!\n'); /* I am done sending. This is the last thing I will be sending.
                                \n is the carriage return in Javascript. */]

}).listen(1337, '127.0.0.1'); /* Mapping to the port with the listen method
                                 with port and address. */
