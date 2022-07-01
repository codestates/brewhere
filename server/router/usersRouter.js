const express = require('express');
const router = express.Router();

let signupController = require('../controllers/users/signup');
let authController = require('../controllers/auth');
let loginController = require('../controllers/users/login');
let logoutController = require('../controllers/users/logout');
let emailCheckController = require('../controllers/users/emailCheck');
let usernameController = require('../controllers/users/username');
let passwordController = require('../controllers/users/password');
let withdrawalController = require('../controllers/users/withdrawal');

router.post('/signup', signupController);
router.post('/login', loginController);
router.get('/logout', logoutController);
router.get('/auth', authController);
router.post('/email', emailCheckController);
router.post('/username', usernameController.post);
router.patch('/username', usernameController.patch);
router.patch('/password', passwordController);
router.delete('/withdrawal', withdrawalController);

module.exports = router;