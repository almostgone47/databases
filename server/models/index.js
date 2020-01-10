var db = require('../db');

module.exports = {
  messages: {
    get: (callback) => {
      var queryStr = 'SELECT messages.id, messages.body, messages.room FROM messages LEFT OUTER JOIN users ON (messages.user_id = user.id)';
      db.query(queryStr, (err, results) => {
        callback(results);
      });;
    }, // a function which produces all the messages
    post: function (params, callback) {
      var queryStr = 'INSERT INTO messages(body, user_id, room.name) values (?, (SELECT id FROM users WHERE name = ? limit 1), ?)';
      db.query(queryStr, params, (err, results) => {
        callback(results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM users', (err, results) => {
        callback(results);
      });
    },
    post: function (params, callback) {
      db.query('INSERT INTO users(username) VALUES (?)', params, (err, results) => {
        callback(results);
    }
  }
};

