const fweets = require('../model/fweets');
module.exports = {
  getAllFweets: (req, res) => {
    res.json(fweets);
  },
  addFweet: (req, res) => {
    fweets.push({
      "id": 8,
      "fweet": "I am coming from a post request!"
    });
    res.json(fweets);
  },
}
