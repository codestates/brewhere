const express = require('express');
const router = express.Router();
const breweryRouter = require('../controllers/Brewery');

router.get('/:breweryid', breweryRouter.breweryList);

module.exports = router;