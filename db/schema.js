const Sequelize = require("sequelize");
const connection = new Sequelize("insta", "root", "", {
	host: "localhost",
	dialect: "mysql",
	pool: {
		max: 20,
		min: 0

	}
});

const Users = connection.define("users", {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	username: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	gender: {
		type: Sequelize.STRING
	},
	profile_pic: {
		type: Sequelize.STRING
	},
	// about: {
	// 	type: Sequelize.STRING,
	// 	allowNull: true
	// }
});

const Submissions = connection.define("submissions", {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
	},
	image_url: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
	caption: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	like_count: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
	},
	user_id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: { model: Users,
			key: "id",
		}
	}

});

const Comments = connection.define("comments", {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
	},
	submission_id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: { model: Submissions,
			key: "id",
		}
	},
	user_id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: { model: Users,
			key: "id",
		}
	},
	content: {
		type: Sequelize.STRING,
		allowNull: false,
	},

});

const Likes = connection.define("likes", {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
	},
	submission_id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: { model: Submissions,
			key: "id",
		}
	},
	user_id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: { model: Users,
			key: "id",
		}
	},

});
const Followers = connection.define("followers", {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
	},
	host_id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: { model: Users,
			key: "id",
		}
	},
	follower_id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: { model: Users,
			key: "id",
		}
	},
	pending: {
		type: Sequelize.BOOLEAN,
		allowNull: false
	}
});


connection.sync();


module.exports = {
	Users,
	Submissions,
	Comments,
	Likes,
	Followers
};
