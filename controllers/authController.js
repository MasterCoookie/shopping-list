const User = require('../models/user');

const signup_get = (req, res) => {
    res.render('auth/signup', { title: 'Sign Up Now!' });
}

const signup_post = async (req, res) => {
    const { name, email, password } = req.body

    try {
        const user = await User.create({ name, email, password });
    } catch(err) {

    }
}

module.exports = {
    signup_get,
    signup_post
}