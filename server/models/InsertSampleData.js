const db = require("../../db/schema");
var users = require("./sample_data/sampleUsers.json");
var submissions = require("./sample_data/sampleSubmissions.json");
var comments = require("./sample_data/sampleComments.json");
var followers = require("./sample_data/sampleFollowers.json");
var likes = require("./sample_data/sampleLikes.json");

var insertSampleData = function() {
	users.forEach(function(user){
		db.Users.create(user)
		.then(function(data){
		})
		.catch(function(error){
			console.log(error)
		})
	});

	submissions.forEach(function(submission){
		db.Submissions.create(submission)
		.then(function(data){
		})
		.catch(function(error){
			console.log(error)
		})
	});

	comments.forEach(function(comment){
		db.Comments.create(comment)
		.then(function(data){
		})
		.catch(function(error){
		})
	});

	followers.forEach(function(follower){
		db.Followers.create(follower)
		.then(function(data){
		})
		.catch(function(error){
			console.log(error)
		})
	});

	likes.forEach(function(like){
		db.Likes.create(like)
		.then(function(data){
		})
		.catch(function(error){
			console.log(error)
		})
	});
};

insertSampleData();
