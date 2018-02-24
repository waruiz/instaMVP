const db = require("../../db/schema");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

var createUser = function(req) {
  db.Users.create(req.body);
};

var getLikes = function(req) {
  db.Likes.find(req.params);
};

var getInfo = function(req) {
  db.Users.find(req.params);
};

var getFollowers = function(req) {
  return db.Users.findAll({
    where: {
      username: req.params.user
    }
  }).then(result => {
    return db.Followers.findAll({
      where: {
        host_id: result[0].dataValues.id
      }
    }).then(results => {
      var list = [];
      results.forEach(element => {
        list.push(element.dataValues.id);
      });
      return db.Users.findAll({
        where: {
          id: {
            [Op.or]: list
          }
        }
      }).then(function(results) {
        var list = [];
        results.forEach(function(element) {
          list.push(element.dataValues);
        });
        return list;
      });
    });
  });
};

var getFollowing = function(req) {
  return db.Users.findAll({
    where: {
      username: req.params.user
    }
  }).then(result => {
    return db.Followers.findAll({
      where: {
        follower_id: result[0].dataValues.id
      }
    }).then(results => {
      var list = [];
      results.forEach(element => {
        list.push(element.dataValues.id);
      });
      return db.Users.findAll({
        where: {
          id: {
            [Op.or]: list
          }
        }
      }).then(function(results) {
        var list = [];
        results.forEach(function(element) {
          list.push(element.dataValues);
        });
        return list;
      });
    });
  });
};

var deleteFollower = function(req) {
    db.Followers.destroy({
        where: req.body
      })
      .then(res.send('DELETED'))
      .catch((err) => console.log(err, '<---- <ERROR>HERE</ERROR>'))
}

var deleteFollowing = function(req) {
  db.Followers.destroy({
      where: req.body
    })
    .then(res.send('DELETED'))
    .catch((err) => console.log(err, '<---- <ERROR>HERE</ERROR>'))
}

module.exports = {
  createUser,
  getLikes,
  getFollowers,
  getFollowing
};
