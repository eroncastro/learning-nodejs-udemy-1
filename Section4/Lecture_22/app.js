// IIFEs
var name = 'Jane';

(function() {
  var name = 'John';

  console.log(name);
})();

console.log(name);
