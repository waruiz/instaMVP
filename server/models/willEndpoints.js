const db = require('../../db/schema');

const postSubmit = (req, res) => {
  return db.Users.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(data => {
    return db.Submissions.create({
      image_url: req.body.image_url,
      caption: req.body.caption,
      user_id: data.dataValues.id
    });
  });
};

const requestFollower = (req, res) => {
  var host;

  db.Users.findOne({
    where: {
      username: req.body.host
    }
  })
  .then(result => {
    host = result.id;
  });

  return db.Users.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(data => {

    return db.Followers.create({
      host_id: host,
      follower_id: data.id,
      pending: true
    })
    .then(newFollowing => {
      console.log('NEW FOLLOWING: ', newFollowing);
      return newFollowing;
    })
  })

};

const getPendingFollowers = (req, res) => {
  return db.Users.findOne({
    where: {
      username: req.params.user
    }
  })
  .then(data => {
    return db.Followers.findAll({
      where: {
        pending: true,
        host_id: data.id
      }
    });
  });
};

const addFollower = (req, res) => {
  let follower;
  
  db.Users.findOne({
    where: {
      username: req.body.follower
    }
  })
  .then(result => {
    follower = result.id;
  });

  return db.Users.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(data => {
    return db.Followers.update({
      pending: false
    }, {
      where: {
        host_id: data.id,
        follower_id: follower
      }
    })
  })
};

// const login = (req, res) => {
//   // Implement with Firebase
// };

// module.exports = {
//   postSubmit,
//   requestFollower,
//   addFollower,
//   login
// };

module.exports = {
  postSubmit,
  getPendingFollowers,
  addFollower,
  requestFollower
}