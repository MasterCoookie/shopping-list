const User = require('../models/user');

const signup_get = (req, res) => {
    res.render('auth/signup', { title: 'Sign Up Now!' });
}

module.exports = { signup_get }