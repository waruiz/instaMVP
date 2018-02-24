const router = require ('express').Router();
const controller = require('./controller')



router.get('/subs', controller.getAllSubs);
router.get('/followers/:user', controller.getFollowers);
router.get('/following/:user', controller.getFollowing);
router.get('/likes/:sub', controller.getSubLikes);
router.get('/comments/:sub', controller.getSubComments);
router.get('/info/:user', controller.getUserInfo);

router.post('/info', controller.postInfo);
router.post('/submit', controller.submit);
router.post('/comment', controller.comment);
router.post('/requestfollower', controller.requestFollower);
router.post('/addfollower', controller.addFollower);

router.put('/info', controller.updateInfo);
router.put('/submit', controller.updateSubmission);
router.put('/comment', controller.updateComment);

router.delete('/submit/:submission', controller.deleteSubmission);
router.delete('/comment', controller.deleteComment);
router.delete('/follower/:user', controller.deleteFollower);
router.delete('/following/:user', controller.deleteUser);

module.exports = router;
