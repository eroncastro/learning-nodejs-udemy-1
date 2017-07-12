var Emitter = require('./emitter');

var emtr = new Emitter();

/*
  The event emitter allows us to listen for events
  instead of using a lot of conditional statements.
*/

emtr.on('greet', function() {
  console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
  console.log('A greeting occured!');
});

console.log('Hello!');
emtr.emit('greet');
