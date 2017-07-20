/*
  A require will wrap the following code inside an IIFE
  with the following definition:

  (function (exports, require, module, __filename, __dirname) {
     var greet = function() {
       console.log('Hello!');
     };
     module.exports = greet;
  })(module.exports, require, module, filename, dirname);

  return module.exports;
*/

var greet = function() {
  console.log('Hello!');
};

// Make greet function available outside our module.
module.exports = greet;

/*
  In summary:

  - require is a function we pass a path to.
  - module.exports is what the require function returns.

  This works because our code is wrapped in a function that is given
  these things as function parameters.
*/
