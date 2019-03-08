const express = require('express');
const router = express.Router();
const MapController = require('../controllers/mapController');

/* GET maps listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
