// services/passport.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.serializeUser(function(user, done) {
 done(null, user.id);
});

passport.deserializeUser(function(id, done) {
 User.findById(id, function (err, user) {
   done(err, user);
 });
});

passport.use(new LocalStrategy(
 { usernameField: 'email' },
 (email, password, next) => {
   User.findOne({ email: email }, (err, user) => {
     if (err) { return next(err); }

     if (!user) { return next(null, false); }

     if (!user.verifyPassword(password)) { return next(null, false); }
     
     return next(null, user);
   });
 }
));
