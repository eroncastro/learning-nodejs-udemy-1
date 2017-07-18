 var fs = require('fs');

var greet = fs.readFileSync(`${__dirname}/greet.txt`, 'utf8');
console.log(greet);

/*
  Error-first callback: callbacks take an error object
  as their first parameter. They are null if no error,
  otherwise will contain an object defining the error.
*/

fs.readFile(`${__dirname}/greet.txt`, function(err, data) {
  if (!err) console.log(data.toString());
});

fs.readFile(`${__dirname}/greet.txt`, 'utf8', function(err, data) {
  if (!err) console.log(data);
});


