const express = require('express');
const router = express.Router();

let signupController = require('../controllers/users/signup');
let loginController = require('../controllers/users/login');
let logoutController = require('../controllers/users/logout');
let mypageController = require('../controllers/users/mypage');
let emailCheckController = require('../controllers/users/emailCheck');
let usernameController = require('../controllers/users/username');
let passwordController = require('../controllers/users/password');
let withdrawalController = require('../controllers/users/withdrawal');

router.post('/signup', signupController);
router.post('/login', loginController);
router.get('/logout', logoutController);
router.get('/mypage', mypageController);
router.post('/email', emailCheckController);
router.patch('/username', usernameController);
router.patch('/password', passwordController);
router.delete('/withdrawal', withdrawalController);

module.exports = router;