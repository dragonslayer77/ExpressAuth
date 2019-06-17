const express = require('express');
const { showSignup, showLogin } = require('../controllers/auth');

const router = express.Router();

router.get('/signup', showSignup);

router.get('/login', showLogin);

module.exports = router;
