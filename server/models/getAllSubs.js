//nelson file

const db = require('../../db/schema')


const getAllSubs = () => {
  return db.Submissions.findAll()
}


module.exports = getAllSubs;