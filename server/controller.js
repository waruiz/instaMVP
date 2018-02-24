<<<<<<< HEAD
const model = require("./models/model");
const getAllSubs = require("./models/getAllSubs");
const johnny = require("./models/johnny");
<<<<<<< HEAD
const comment = require("./models/comment");
=======
=======
const model = require('./models/model');
<<<<<<< HEAD
const getAllSubs = require('./models/getAllSubs')
>>>>>>> Fix MySQL load issues
>>>>>>> Fix MySQL load issues

=======

// const getAllSubs = require('./models/getAllSubs')

const johnny = require('./models/johnny');

const comment = require('./models/postComment');

const will = require('./models/willEndpoints');


>>>>>>> Changes
module.exports = {

getAllSubs: (req, res) => {
  getAllSubs().then(submissions => {
    res.send(submisions);
  });
},

getFollowers: (req, res) => {
  johnny.getFollowers(req).then(followers => {
    res.send(followers);
  });
},

getFollowing: (req, res) => {
  johnny.getFollowing(req).then(following => {
    res.send(following);
  });
},

  getSubLikes: (req, res) => {
    res.send('getSubsLikes Success');
  },

  getSubComments: (req, res) => {
    comment.getSubComments(req, res).then((comments) => {
      console.log("here be the submissions comments")
      res.send(comments);
    });
  },

  getUserInfo: (req, res) => {
    res.send('getUserInfo Success');
  },

  postInfo: (req, res) => {
    res.send('post Info Success');
  },

  submit: (req, res) => {
    res.send('submit Success');
  },

  comment: (req, res) => {
    comment.postComment(req, res).then((comment) => res.send(comment));
  },

  requestFollower: (req, res) => {
    res.send('requestFollower Success');
  },

  addFollower: (req, res) => {
    res.send('addFollower Success');
  },

  updateInfo: (req, res) => {
    res.send('Updateinfo Success');
  },

  updateSubmission: (req, res) => {
    res.send('updateSubmission Success');
  },

  updateComment: (req, res) => {
    comment.updateComment(req, res).then((comment) => {
      console.log('comment updated')
      res.send(comment);
    })
  },

  deleteSubmission: (req, res) => {
    res.send('delete submission Success');
  },

  deleteComment: (req, res) => {
    comment.deleteComment(req,res);
  },

  deleteFollower: (req, res) => {
    res.send('delete Follower Success');
  },

  deleteUser: (req, res) => {
    res.send('delete User Success');
  }









}
