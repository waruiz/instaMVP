const db = require("../../db/schema");


module.exports = {
	postComment: (req, res) => {
		let comment = db.Comments.create(req.body);
		return comment;
	},

	getSubComments: (req, res) => {
		return db.Comments.findAll({
			where: {
				submission_id: req.params.sub
			},
		}).then(results =>{
			return results.map( (element) => {
				return element.dataValues;
			})
		})
		.then(comments => {
			var list = []
			comments.forEach( comment => {
				list.push(db.Users.findOne({
					where: {
						id: comment.user_id
					}
				}).then(result => {
					comment.username = result.username;
					console.log(comment);
					return comment;
				}))
			})
			return Promise.all(list).then( values => values);
		})
	},

	updateComment: (req, res) => {
		return db.Comments.update({
			content: req.body.content
		}, {
			where: {
				submission_id: req.body.submission_id
			},
			returning: true,
			plain: true
		});

	},

	deleteComment: (req, res) => {
		db.Comments.destroy({
			where: {
				id: req.body.id,
			}
		})
			.then(res.send("DELETED"))
			.catch((err) => console.log(err, "<---- <ERROR>HERE</ERROR>"));

	}

};
