const db = require('../../db/schema');

const postSubmit = (req, res) => {
  db.Submissions.create(req.body);
};

const requestFollower = (req, res) => {
  db.Followers.create(req.body);
};

const addFollower = (req, res) => {
  db.Followers.create(req.body);
};

module.exports = postSubmit;
