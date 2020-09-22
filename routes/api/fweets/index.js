const router = require('express').Router();
const fweetController = require('../../../controller/fweetController');
// prepended /api/fweets
router.route('/')
  .get(fweetController.getAllFweets)
  .post(fweetController.addFweet);
module.exports = router;
