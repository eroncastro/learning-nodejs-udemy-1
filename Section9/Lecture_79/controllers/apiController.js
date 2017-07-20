var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

module.exports = function(app) {
  app.get('/api/person/:id', function(req, res) {
  // get data from database
    res.json({ firstname: 'John', lastname: 'Doe' });
  });

  app.post('/api/person', jsonParser, function(req, res) {
    res.send('Thanks for the json data!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
  });

  app.delete('/api/person/:id', function(req, res){
    // delete from database
  });
};