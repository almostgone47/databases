var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) { // a function which handles posting a message to
      models.messages.post((err, results) => {
        res.json(results);
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, results) => {
        res.json(results);
      });
    },
    post: function (req, res) {
      models.users.post((err, results) => {
        res.json(results);
      });
    }
  }
};