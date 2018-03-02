const db = require("../../db/schema");

const putLike = (req, res) => {
	return db.Users.findOne({
		attributes: ['id'],
		where: {
			username: req.body.data.username
		}
	})
	.then(userId => {
		return db.Likes.findOne({
			where: {
				user_id: userId.dataValues.id,
				submission_id: req.body.data.postId
			}
		})
		.then(result => {
			if (result === null) {
				return db.Submissions.findOne({
					where: {
						id: req.body.data.postId
					}
				})
				.then(submission => {
					return submission.increment('like_count', {by: 1});
				})
				// Create entry in Likes
				.then(result => {
					return db.Users.findOne({
						attributes: ['id'],
						where: {
							username: req.body.data.username
						}
					})
					.then(result => {
						return db.Likes.create({
							submission_id: req.body.data.postId,
							user_id: result.dataValues.id
						})
					})
				});
			} else {
				// decrement like on Submissions
				return db.Submissions.findOne({
					where: {
						id: req.body.data.postId
					}
				})
				.then(submission => {
					return submission.decrement('like_count', {by: 1});
				})
				// destroy entry from Likes
				.then(result => {
					return db.Users.findOne({
						attributes: ['id'],
						where: {
							username: req.body.data.username
						}
					})
				})
				.then(result => {
					db.Likes.destroy({
						where: {
							user_id: result.dataValues.id,
							submission_id: req.body.data.postId
						}
					});
				})
			}
		})
	})
}

const getUserSubs = (req, res) => {
  return db.Users.findAll({
    where: {
      username: req.params.user
    }
  }).then(result => {
    return db.Submissions.findAll({
      where: {
        user_id: result[0].dataValues.id
      }
    }).then(results => {
      var list = [];
      results.forEach(element => {
        list.push(element.dataValues.image_url);
      });

      return list;
    });
  });
};

const postSubmit = (req, res) => {
  return db.Users.findOne({
    where: {
      username: req.body.username
    }
  }).then(data => {
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
  }).then(result => {
    host = result.id;
  });

  return db.Users.findOne({
    where: {
      username: req.body.username
    }
  }).then(data => {
    return db.Followers.create({
      host_id: host,
      follower_id: data.id,
      pending: true
    }).then(newFollowing => {
      return newFollowing;
    });
  });
};

const getPendingFollowers = (req, res) => {
  return db.Users.findOne({
    where: {
      username: req.params.user
    }
  }).then(data => {
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
  }).then(result => {
    follower = result.id;
  });

  return db.Users.findOne({
    where: {
      username: req.body.username
    }
  }).then(data => {
    return db.Followers.update(
      {
        pending: false
      },
      {
        where: {
          host_id: data.id,
          follower_id: follower
        }
      }
    );
  });
};

module.exports = {
	postSubmit,
	getPendingFollowers,
	addFollower,
	requestFollower,
	getUserSubs,
	putLike
};
