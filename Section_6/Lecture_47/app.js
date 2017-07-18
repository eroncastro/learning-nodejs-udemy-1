/*
  The buffer holds raw binary data.
  Just to remember: a buffer is just a temporary holding
  spot for data being moved from one place to another.

  Node added buffers, because Javascript had no good way
  to deal with binary data.

  NodeJS made buffer global.
*/

var buf = new Buffer('Hello', 'utf8'); // utf8 is the default
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wo');
console.log(buf.toString());
