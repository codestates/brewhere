const express = require('express');
const router = express.Router();
let mypageController = require('../controllers/mypage/mypage');

router.get('/mypage', mypageController);

module.exports = router;