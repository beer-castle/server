const express = require('express');
const router = express.Router();
const PictureController = require('../controllers/pictureController');

/* GET pictures listing. */
router.get('/', PictureController.getPicture);

module.exports = router;
