const db = require('../../db/schema');
var users = require('./sampleUsers.json');
var submissions = require('./sampleSubmissions.json');
var comments = require('./sampleComments.json');
var followers = require('./sampleFollowers.json');
var likes = require('./sampleLikes.json');

var insertSampleData = function() {
  users.forEach(function(user){
    db.Users.create(user);
  })
  
  submissions.forEach(function(submission){
    db.Submissions.create(submission);
  })
  
  comments.forEach(function(comment){
    db.Comments.create(comment);
  })
  
  followers.forEach(function(follower){
    db.Followers.create(follower);
  })
  
  likes.forEach(function(like){
    db.Likes.create(like);
  })
}

insertSampleData()