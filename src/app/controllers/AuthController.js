import User from '../models/User.js'
import jwt from 'jsonwebtoken'

// handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {
        email: '',
        password: ''
    };

    // incorrect email
    if (err.message === 'incorrect email') {
        errors.email = 'That email is not registered';
    }

    // incorrect password
    if (err.message === 'incorrect password') {
        errors.password = 'That password is incorrect';
    }

    // duplicate email error
    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }

    // validation errors
    if (err.message.includes('user validation failed')) {
        // console.log(err);
        Object.values(err.errors).forEach(({
            properties
        }) => {
            // console.log(val);
            // console.log(properties);
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({
        id
    }, 'net ninja secret', {
        expiresIn: maxAge
    });
};

// Login
export const LogIn = async (req, res) => {
    const user = await User.findOne({
        email: req.body.email
    });
    if (!user) return res.status(400).send('Invalid credentials');
    // check password
    const validPass = await User.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Invalid Password')

    res.send('Log In!')
}