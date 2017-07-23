var Todos = require('../models/todoModel');

module.exports = function(app) {
  app.get('/api/setupTodos', function(req, res) {
    var starterTodos = [
      {
        username: 'test',
        todo: 'buy milk',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Feed dog',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'learn node',
        isDone: false,
        hasAttachment: false
      }
    ];

    Todos.create(starterTodos, function(err, results) {
      res.send(results);
    });
  });
};
