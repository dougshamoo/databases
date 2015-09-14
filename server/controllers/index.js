var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get(function(results) {
        // TODO: handle err
        res.json(results);
      });
    }, 
    // a function which handles posting a message to the database
    post: function (req, res) {
      var params = [req.body['message'], req.body['username'], req.body['roomname']];
      models.messages.post(params, function(results) {
        // TODO: handle err
        res.json(results);
      });
    } 
  },

  users: {
    get: function (req, res) {
      models.users.get(function(results) {
        // TODO: handle err
        res.json(results);
      });
    },
    post: function (req, res) {
      models.users.post([req.body.username], function(results) {
        // TODO: handle err
        res.json(results);
      });
    }
  }
};

