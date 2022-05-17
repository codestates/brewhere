const express = require('express');
const router = express.Router();
const breweryRouter = require('../controllers/brewery/breweryList');

router.get('/:breweryid', breweryRouter);

module.exports = router;