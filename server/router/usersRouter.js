const express = require('express');
const router = express.Router();
let usersController = require('../controllers/users/');

router.post('/signup', usersController.signup);
router.post('/login', usersController.login);
router.get('/logout', usersController.logout);
router.get('/mypage', usersController.mypage);
router.post('/email', usersController.emailCheck);
router.patch('/username', usersController.username);
router.patch('/password', usersController.password);
router.delete('/withdrawal', usersController.withdrawal);

module.exports = router;