const router = require('express').Router();
const fweetRoutes = require('./fweets');
router.use('/fweets', fweetRoutes);
module.exports = router;
