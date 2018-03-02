const db = require("../../db/schema");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

var createUser = function(req) {
	return db.Users.create(req.body);
};

var getLikes = function(req) {
	return db.Likes.find({
		where: req.params
	});
};

var getUserInfo = function(req) {
	return db.Users.find({
		where: req.params
	});
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
				list.push(element.dataValues.host_id);
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
	return db.Followers.destroy({
		where: req.body
	});
};

var deleteFollowing = function(req) {
	return db.Followers.destroy({
		where: req.body
	});
};

var getSubsByFollowing = function(req){
	return db.Users.findAll({
		where: {
			username: req.params.user
		}
	}).then( result => {
		return db.Followers.findAll({
			where: {
				follower_id: result[0].dataValues.id
			}
		}).then(results => {
			var list = [];
			results.forEach(element => {
				list.push(element.dataValues.host_id)
			})
			return db.Submissions.findAll({
				where: {
					user_id: {
						[Op.or]: list
					}
				}
			}).then(results => {
				var list = results.map( (element) => {
					return element.dataValues;
				})
				console.log(list)
				return list;
			})
			.then(submissions => { 
				let sub = [];
				var list = submissions.map(submission=>{
					sub.push(db.Users.findOne({
						where: {
							id: submission.user_id
						}
					})
					.then(result => {
						submission.username = result.username;
						return submission;
					}))
				})
				return Promise.all(sub).then(values => (values))
		})
	})
})
}

// var getSubsByFollowing = function(req){

// 	db.Users.findAll({
// 			attributes: ['id', 'username', 'name'],
// 			where: {
// 					username: req.params.user
// 			},
// 			include: [ {
// 					model: db.Followers,
// 					attributes: ['host_id', 'follower_id'],
// 					where: {
// 							follower_id: 4
// 					}
// 			} ]
// 	}).then(result => {
// 			console.log('I AM FOLLOWINGGGGGGGGG: ', result);
// 			// db.Followers.findAll({
// 			//     where: {
// 			//         follower_id: result[0].dataValues.id
// 			//     }
// 			// })
// 	});

	// return db.Users.findAll({
	//     where: {
	//         username: req.params.user
	//     }
	// }).then( result => {
	//     // console.log(result);
	//     return db.Followers.findAll({
	//         where: {
	//             follower_id: result[0].dataValues.id
	//         }
	//     }).then(results => {
	//         var list = [];
	//         results.forEach(element => {
	//             list.push(element.dataValues.host_id)
	//         })
	//         return db.Submissions.findAll({
	//             where: {
	//                 user_id: {
	//                     [Op.or]: list
	//                 }
	//             }
	//         }).then(results => {
	//             var list = results.map( (element) => {
	//                 return element.dataValues;
	//             })
	//             // console.log(list);
	//             return list;
	//         })
	//         .then(list => {
	//             return list.map(element => {
	//                 // if ( !(element.hasOwnProperty('username')) ) {
	//                     return db.Users.findOne({
	//                         where: {
	//                             id: element.user_id
	//                         }
	//                     })
	//                     .then(result => {
	//                         element.username = result.dataValues.username;
	//                         // console.log(element);
	//                         return element;
	//                     })
	//                     .then(result => {
	//                         console.log(result);
	//                         return result;
	//                     })
											
	//                 // }
	//             });
	//             // console.log(some);
	//             // return some;
	//         })
	//     })
	// })





module.exports = {
	createUser,
	getLikes,
	getUserInfo,
	getFollowers,
	getFollowing,
	getSubsByFollowing,
	deleteFollower,
	deleteFollowing
};
