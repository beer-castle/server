const express = require('express');
const router = express.Router();
const VideoController = require('../controllers/videoController');

/* GET videos listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
