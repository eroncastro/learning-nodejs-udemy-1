var greet = function () {
  console.log('Hello!');
};
// Unless we expose our variables and objects,
// they won't be available to the outside to avoid
// possible collisions.
module.exports = greet;
