angular.module('TestApp', []);

angular
  .module('TestApp')
  .controller('MainController', ctlrFunc);

function ctlrFunc() {
  this.message = 'Hello';

  this.people = [
    { name: 'John Doe' },
    { name: 'Jane Doe' },
    { name: 'Jim Doe' }
  ]
}
