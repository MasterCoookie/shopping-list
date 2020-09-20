const jwt = require('jsonwebtoken');
const secret = require('../secret');
const User = require('../models/user');
const { model } = require('../models/user');

const requireLogin = (req, res, next) => {
    const token = req.cookies.jwt;

    if(token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if(err) {
                console.log(err);
                res.redirect('/logout');
            } else {
                next();
            }
        })
    } else {
        res.redirect('/login');
    }
}

const checkuser = (req, res, next) => {
    const token  = req.cookies.jwt;

    if(token) {
        jwt.verify(token, secret, async (err, decodedToken) => {
            if(err) {
       res.locals.user = null;
                console.log(err);
                res.locals.user = null;
                res.redirect('/logout');
                next();
            } else {
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        })
    } else {
       res.locals.user = null;
       next();
    }
}

module.exports = { requireLogin, checkuser };