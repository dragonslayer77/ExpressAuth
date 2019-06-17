const bcrypt = require('bcrypt');
const User = require('../models/User');
const passport = require('passport');

const showSignup = (req, res, next) => {
    res.render('signup');
}

const showLogin = (req, res, next) => {
    console.log(req.user);
    res.render('login');
}

const createUser = (req, res, next) => {
    User.findOne({ email: req.body.email }, (err, found) => {
        console.log(req.body);
        if(err) res.status(500).send(err);

        if(found){
            res.status(409).send('user already exists');
        }

        User.create(
            {
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10)
            },
            (error, saved) =>{
                if(error) req.status(400).send(error)
                next();
            })
    })
}

const authenticateUser = passport.authenticate(
    'local',
    { failureRedirect: '/auth/login', successRedirect: '/posts' }
)

const authorize = (req, res, next) => {
    if(!req.user) res.redirect('/auth/login');

    next();
}

const logout = (req, res, next) => {
    req.logout();
    res.redirect('/goodbye');
}

module.exports = { showSignup, showLogin, createUser, authenticateUser, authorize, logout };