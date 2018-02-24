const db = require('../../db/schema');


module.exports = {
  postComment: (req, res) => {
    console.log(req.body, 'gonna req dot body')
    let comment = db.Comments.create(req.body);
    return comment;
  },

  getSubComments: (req, res) => {
<<<<<<< HEAD
    let comments = db.Comments.findAll({
      where: {
        submission_id: req.params.sub
      },
    });
=======
    let comments = db.Comments.findAll({submission_id: req.body});
>>>>>>> debugged comments, tidied directories
    return comments;
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
      .then(res.send('DELETED'))
      .catch((err) => console.log(err, '<---- <ERROR>HERE</ERROR>'))

  }

}
