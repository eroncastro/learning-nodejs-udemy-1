var greet = require('./greet1');
var greet2 = require('./greet2').greet;
var greet3 = require('./greet3');
var greet3b = require('./greet3');
var Greet4 = require('./greet4');
var greet5 = require('./greet5');


greet();
greet2();
greet3.greet();

greet3.greeting = 'Changed hello world!'

greet3.greet(); // Prints Changed hello world!
greet3b.greet(); // Prints Changed hello world!

/*
  This is due to the fact that after a module has been
  first required, it gets cached. So, whenever it gets
  required again, a cached version is supplied.
  This mean that module.exports is only called once.
*/

var grtr = new Greet4();
grtr.greet();

greet5.greet();
