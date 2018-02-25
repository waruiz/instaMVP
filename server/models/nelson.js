//nelson file

const db = require("../../db/schema");

const getAllSubs = () => {
  return db.Submissions.findAll();
};
<<<<<<< HEAD

const deleteSubmission = req => {
  return db.Comments.destroy({
    where: {
      submission_id: req.body.id
    }
  })
    .then(results => {
      return db.Likes.destroy({
        where: {
          submission_id: req.body.id
        }
      });
    })
    .then(data => {
      return db.Submissions.destroy({
        where: {
          id: req.body.id
        }
      });
    });
};

const deleteUser = req => {
  return db.Comments.destroy({
    where: {
      user_id: req.body.id
    }
  })
    .then(results => {
      return db.Likes.destroy({
        where: {
          user_id: req.body.id
        }
      });
    })
    .then(data => {
      return db.Submissions.destroy({
        where: {
          user_id: req.body.id
        }
      });
    })
    .then(data => {
      return db.Followers.destroy({
        where: {
          follower_id: req.body.id
        }
      });
    })
    .then(data => {
=======

const deleteSubmission = req => {
  return db.Comments.destroy({
    where: {
      submission_id: req.body.id
    }
  })
    .then(results => {
      return db.Likes.destroy({
        where: {
          submission_id: req.body.id
        }
      });
    })
    .then(data => {
      return db.Submissions.destroy({
        where: {
          id: req.body.id
        }
      });
    });
};

const deleteUser = req => {
  return db.Comments.destroy({
    where: {
      user_id: req.body.id
    }
  })
    .then(results => {
      return db.Likes.destroy({
        where: {
          user_id: req.body.id
        }
      });
    })
    .then(data => {
      return db.Submissions.destroy({
        where: {
          user_id: req.body.id
        }
      });
    }).then(data => {
      return db.Followers.destroy({
        where:{
          follower_id: req.body.id,

        }
      })
    }).then(data => {
>>>>>>> nelson changes
      return db.Followers.destroy({
        where: {
          host_id: req.body.id
        }
<<<<<<< HEAD
      });
    })
    .then(data => {
=======
      })
    }).then(data => {
>>>>>>> nelson changes
      return db.Users.destroy({
        where: {
          id: req.body.id
        }
<<<<<<< HEAD
      });
    });
};
=======
      })
    })
}
>>>>>>> nelson changes
module.exports.getAllSubs = getAllSubs;
module.exports.deleteSubmission = deleteSubmission;
module.exports.deleteUser = deleteUser;
