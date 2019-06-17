const express = require('express');
const router = express.Router();

const { authorize } = require('../controllers/auth');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Wild Code School' });
})

router.get('/posts', authorize, (req, res, next) => {
  res.render('posts');
})

router.get('/goodbye', (req, res, next) => {
  res.render('goodbye');
})

module.exports = router;
