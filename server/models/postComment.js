const db = require('../../db/schema');


module.exports = {
  postComment: (req, res) => {
    console.log(req.body, 'gonna req dot body')
    let comment = db.Comments.create(req.body);
    return comment;
  },



}
