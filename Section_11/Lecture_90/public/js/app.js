angular.module('TestApp', []);

angular
  .module('TestApp')
  .controller('MainController', ctlrFunc);

function ctlrFunc() {
  this.people = clientPeople;
}
