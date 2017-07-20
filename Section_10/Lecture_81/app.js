var express = require('express');
var app = express();
var mysql = require('mysql');

var port = process.env.PORT || 3000;

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

app.use('/assets', express.static(`${__dirname}/public`));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
  console.log(`Request URL: ${req.url}`);

  var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  con.query(`
    SELECT people.id, firstname, lastname, address
    FROM people
    INNER JOIN people_addresses ON people.id = people_addresses.person_id
    INNER JOIN addresses ON addresses.id = people_addresses.address_id;`,
      function(err, rows) {
        // error-first callback
        if (err) throw err;

        console.log(rows);
      }
  );

  next();
});

htmlController(app);
apiController(app);

app.listen(port);
