const User = require('../models/user');

const errorHandler = (err) => {
    let errors = { name: '', email: '', password: '' }

    if(err.code === 11000) {
        errors.email = 'This Email Adress Is Already In Use!';
        return errors;
    }

    //console.log(err.properties);

    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

const signup_get = (req, res) => {
    res.render('auth/signup', { title: 'Sign Up Now!' });
}

const signup_post = async (req, res) => {
    const { name, email, password } = req.body

    try {
        const user = await User.create({ name, email, password });
    } catch(err) {
        const errors = errorHandler(err);
        res.status(400).json({ errors });
    }
}

module.exports = {
    signup_get,
    signup_post
}