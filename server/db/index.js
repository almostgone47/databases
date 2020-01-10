var Sequelize = require('sequelize');
var orm = new Sequelize('chat', 'student', 'student');

var User = orm.define('User', {
  name: Sequelize.STRING
});

var Message = orm.define('Message', {
  body: Sequelize.STRING,
  roomName: Sequelize.String
});

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;