var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

/*
  The event emitter allows us to listen for events
  instead of using a lot of conditional statements.
*/

emtr.on(eventConfig, function() {
  console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig, function() {
  console.log('A greeting occured!');
});

console.log('Hello!');
emtr.emit(eventConfig);
