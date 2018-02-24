const db = require('../../db/schema');


var createUser = function(req){
  db.Users.create(req.body);
}

var getLikes = function(req){
  db.Likes.find(req.params)
}

var getInfo = function(req){
  db.Users.find(req.params);
}

module.exports = {
createUser,
getLikes
}

