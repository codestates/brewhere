const express = require('express');
const router = express.Router();
const breweryRouter = require('../controllers/brewery');

router.get('/:breweryid', breweryRouter.breweryList);

module.exports = router;