const model = require('./models/model');

module.exports = {

    getAllSubs: (req, res) => {
      res.send('getAllSubs Success');
    },

    getFollowers: (req, res) => {
      res.send('getFollowers Success');
    },

    getFollowing: (req, res) => {
      res.send('getFollowing Success');
    },

    getSubLikes: (req, res) => {
      res.send('getSubsLikes Success');
    },

    getSubComments: (req, res) => {
      res.send('getSubComments Success');
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
      res.send('comment Success');
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
      res.send('updateComment Success');
    },

    deleteSubmission: (req, res) => {
      res.send('delete submission Success');
    },

    deleteComment: (req, res) => {
      res.send('delete Comment Success');
    },

    deleteFollower: (req, res) => {
      res.send('delete Follower Success');
    },

    deleteUser: (req, res) => {
      res.send('delete User Success');
    }






















}
