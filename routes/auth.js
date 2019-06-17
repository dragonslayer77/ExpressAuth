const express = require('express');
const { logout, createUser, showSignup, showLogin, authenticateUser } = require('../controllers/auth');

const router = express.Router();

router.get('/signup', showSignup);
router.post('/signup', createUser, showLogin);

router.get('/login', showLogin);
router.post('/login', authenticateUser);

router.get('/logout', logout);

module.exports = router;
