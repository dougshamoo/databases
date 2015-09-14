var db = require('../db');




module.exports = {
  messages: {
    // a function which produces all the messages
    // id, text, roomname, username
    get: function (callback) {
      var queryStr = 'select messages.id, messages.text, users.userName, rooms.roomName \
                      from messages \
                      left outer join users on (messages.userId = users.id) \
                      left outer join rooms on (messages.roomId = rooms.id) \
                      order by messages.id desc';
      db.query(queryStr, function(err, results) {
        callback(results);
      });
    },
    // a function which can be used to insert a message into the database
    post: function (params, callback) {
      var userQuery = 'insert into users (userName) values (?)';
      db.query(userQuery, [params[1]], function(err, results) {
        var roomQuery = 'insert into rooms (roomName) values (?)';
        db.query(roomQuery, [params[2]], function(err, results) {
          var queryStr = 'insert into messages (text, userId, roomId) \
                          values (?, (select id from users where userName = ? limit 1), (select id from rooms where roomName = ? limit 1))';
          db.query(queryStr, params, function(err, results) {
            callback(results);
          });
        });
      });
    }
  },

  users: {
    // a function which produces all the users
    get: function (callback) {
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        callback(results);
      });
    },
    // a function which can be used to insert a user into the database
    post: function (params, callback) {
      var queryStr = 'insert into users (userName) values (?)';
      db.query(queryStr, params, function(err, results) {
        callback(results);
      });
    }
  }
};

