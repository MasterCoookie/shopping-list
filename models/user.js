const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const pwdValid = (password) => {
    if(/^\d+$/.test(password) || /^[a-zA-Z]+$/.test(password)) {
        return false;
    }
    if(password.toUpperCase() === password || password.toLowerCase() === password) {
        return false;
    }
    return true;
}

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please Enter Your Full Name'],
    },
    email: {
        type: String,
        required: [true, 'Please Enter Your email'],
        unique: true,
        validate: [isEmail, 'Please Enter Correct Email Adress']
    },
    password: {
        type: String,
        required: [true, 'Please Enter A Password'],
        minlength: [8, 'Your Password Has To Be At Least 8 Characters Long'],
        maxlength: [24, 'Your Password Has To Be Less Than 24 Characters Long'],
        validate: [pwdValid, 'Your Password Must Contain Both Letters (Lowercase And Uppercase) And Numbers']
    }
});

userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const User = mongoose.model('user', userSchema);

module.exports = User;