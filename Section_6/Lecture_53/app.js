/*
  Stream - sequence of pieces of data, break into chunks.
  Chunk - piece of data being sent through a stream.

  Data is split into chunks and streamed.

  In NodeJS, Stream is an EventEmitter.
*/

var fs = require('fs');
var zlib = require('zlib');

/*
  highWaterMark is the buffer size. In order words, how big we want
  each chunk to be.
*/
var readable = fs.createReadStream(`${__dirname}/greet.txt`);

var writable = fs.createWriteStream(`${__dirname}/greetcopy.txt`);

var compressed = fs.createWriteStream(`${__dirname}/greet.txt.gz`);

var gzip = zlib.createGzip();

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);
