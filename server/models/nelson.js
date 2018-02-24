//nelson file

const db = require('../../db/schema')


const getAllSubs = () => {
  return db.Submissions.findAll()
}

// const getFollowing = () =>{
//   return db.Followers.findAll({host_id})
// }

module.exports.getAllSubs = getAllSubs;