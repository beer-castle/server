const express = require('express');
const router = express.Router();
const VideoController = require('../controllers/videoController');

/* GET videos listing. */
router.get('/', VideoController.getVideo);

module.exports = router;
