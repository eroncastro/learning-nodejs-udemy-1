/*
  Stream - sequence of pieces of data, break into chunks.
  Chunk - piece of data being sent through a stream.

  Data is split into chunks and streamed.

  In NodeJS, Stream is an EventEmitter.
*/

var fs = require('fs');

/*
  highWaterMark is the buffer size. In order words, how big we want
  each chunk to be.
*/
var readable = fs.createReadStream(
  `${__dirname}/greet.txt`, { encoding: 'utf8', highWaterMark: 1024 });

var writable = fs.createWriteStream(`${__dirname}/greetcopy.txt`);

readable.on('data', function(chunk) {
  console.log(chunk.length);
  writable.write(chunk);
});
