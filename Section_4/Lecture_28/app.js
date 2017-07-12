/*
  To require a Native core module, we only need to specify its name.
*/

var util = require('util');

var name = 'Tony';
var greeting = util.format('Hello, %s', name);

util.log(greeting);
