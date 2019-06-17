const showSignup = (req, res, next) => {
    res.render('signup');
}

const showLogin = (req, res, next) => {
    res.render('login');
}

module.exports = { showSignup, showLogin };