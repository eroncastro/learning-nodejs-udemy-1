var util = require('util');

function Person() {
  this.firstname = 'John';
  this.lastname = 'Doe';
}

Person.prototype.greet = function() {
  console.log(`Hello, ${this.firstname} ${this.lastname}`);
};

function Policeman() {
  Person.call(this);
  this.bagnumber = '1234';
}

util.inherits(Policeman, Person); /*
  utils.inherits only connect the prototypes
*/
var officer = new Policeman();
officer.greet();
