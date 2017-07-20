// Revealing module pattern
// Only the desired properties and method are exposed.
var greeting = 'Hello, world! 5';

function greet() {
  console.log(greeting);
}

module.exports = {
  greet: greet
};
