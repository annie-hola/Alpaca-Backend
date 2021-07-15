import mongoose from 'mongoose'
import User from '../models/User.js'
<<<<<<< HEAD
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
=======
import bcrypt from 'bcryptjs'

>>>>>>> f8d16f16e68c9c3b7842d360fd95e278e9acbdf6
// create new User 
export const createNewUser = (req, res) => {

    const user = new User({
        _id: mongoose.Types.ObjectId(),
        fullName: req.body.fullName,
        company: req.body.company,
        country: req.body.country,
        contact: req.body.contact,
        role: req.body.role,
        currentPlan: req.body.currentPlan,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        status: "pending",
        avatar: "",
    })

    return user

        .save()
        .then((newUser) => {
            return res.status(200).json({
                success: true,
                messgae: 'New user is created',
                User: newUser,
            })
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({
                success: false,
                messgae: 'Server error, please try again.',
                error: err.messgae
            })
        })
}

// get all user 
export const getAllUser = (req, res) => {
    User.find()
        .select('_id fullName company country contact role currentPlan userName email password status avatar')
        .then((allUser) => {
            return res.status(200).json({
                success: true,
                message: 'list of user is got',
                User: allUser
            })
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error, please try again.',
                error: err.message
            })
        })
}

// update user 
export const updateUser = (req, res) => {
    const id = req.params.userId
    const updateObject = req.body
    User.update({
            _id: id
        }, {
            $set: updateObject
        })
        .exec()
        .then(() => {
            return res.status(200).json({
                success: true,
                message: 'User is updated',
                updateUser: updateObject
            })
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error, please try again.',
                error: err.message
            })
        })
}
// active User
export const activeUser = (req, res) => {
    const id = req.params.userId
    User.update({
<<<<<<< HEAD
            _id: id
        }, {
            $set: {
                status: "active"
            }
        })
=======
        _id: id
    }, {
        $set: {
            status: "active"
        }
    })
>>>>>>> f8d16f16e68c9c3b7842d360fd95e278e9acbdf6
        .exec()
        .then(() => {
            return res.status(200).json({
                success: true,
                message: 'User is updated',
            })
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: 'Server error, please try again.',
                error: err.message
            })
        })
}
// delete user 
export const deleteUser = (req, res) => {
    const id = req.params.userId
    User.findByIdAndRemove(id)
        .exec()
        .then(() => {
            return res.status(200).json({
                success: true,
                message: 'User is deleted',
            })
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error, please try again.',
                error: err.message
            })
        })
}

// sort user by role 
export const sortUserByRole = (req, res) => {
    User.find().sort({
<<<<<<< HEAD
            "role": 1
        })
=======
        "role": 1
    })
>>>>>>> f8d16f16e68c9c3b7842d360fd95e278e9acbdf6
        .select('_id fullName company country contact role currentPlan userName email password status avatar')
        .then((allUser) => {
            return res.status(200).json({
                success: true,
                message: 'list of user is got',
                User: allUser
            })
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error, please try again.',
                error: err.message
            })
        })
}
//sort user by plan
export const sortUserByPlan = (req, res) => {
    User.find().sort({
<<<<<<< HEAD
            "currentPlan": 1
        })
=======
        "currentPlan": 1
    })
>>>>>>> f8d16f16e68c9c3b7842d360fd95e278e9acbdf6
        .select('_id fullName company country contact role currentPlan userName email password status avatar')
        .then((allUser) => {
            return res.status(200).json({
                success: true,
                message: 'list of user is got',
                User: allUser
            })
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error, please try again.',
                error: err.message
            })
        })
}

export const LogIn = async (req, res) => {
    //Login a active user
    try {
        // check email
        const user = await User.findOne({
            email: req.body.email
        })
        if (!user) {
<<<<<<< HEAD
            return res.status(401).send({
                error: 'No credentials'
            })
        }
=======
            console.log(user)
            return res.status(401).send({
                error: 'No credentials'
            })
        } else if (user.status === "pending") {
            console.log(user.status)
            return res.status(401).send({
                error: 'User is pending'
            })
        } else if (user.status === "active") { }
>>>>>>> f8d16f16e68c9c3b7842d360fd95e278e9acbdf6
        //check password
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (!validPass) return res.status(400).send('Invalid password');

<<<<<<< HEAD
        // create Token
        const token = jwt.sign({
            _id: user._id
        }, process.env.JWT_KEY);
        res.header('auth-token', token);

=======
        const token = await user.generateAuthToken()
>>>>>>> f8d16f16e68c9c3b7842d360fd95e278e9acbdf6
        res.send({
            user,
            token
        })
<<<<<<< HEAD

    } catch (error) {
        console.log(error);
        res.status(400)
    }
=======
        res.send('Log In')

    } catch (error) {
        console.log(error);
        res.status(400).send('Something wrong')
    }

>>>>>>> f8d16f16e68c9c3b7842d360fd95e278e9acbdf6
}

//Log Out
export const LogOut = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
<<<<<<< HEAD
=======
        res.send('Log Out now')
>>>>>>> f8d16f16e68c9c3b7842d360fd95e278e9acbdf6
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
<<<<<<< HEAD
}

// View logged in user profile
export const View = async (req, res) => {
    res.send(req.user)
=======
>>>>>>> f8d16f16e68c9c3b7842d360fd95e278e9acbdf6
}