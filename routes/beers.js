const express = require('express');
const router = express.Router();
const BeerController = require('../controllers/beerController');

/* GET beers listing. */
router.get('/onday', BeerController.onday);
router.get('/list', BeerController.list);

module.exports = router;