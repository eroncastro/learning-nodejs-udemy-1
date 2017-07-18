/*
  ES6 typed arrays
*/

var buffer = new ArrayBuffer(8); // 8 bytes
/*
  A view is a typed array that makes easier to deal with the buffer.
*/

var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
console.log(view);
