import mongoose from 'mongoose'
import User from '../models/User.js'

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
        password: req.body.email,
        status: "pending",
        avatar: ""
    })

    return user
        .save()
        .then((newUser) => {
            return res.status(200).json({
                success: true,
                messgae: 'New user is created',
                User: newUser
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
    User.update({ _id: id }, { $set: updateObject })
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
    // const updateObject = req.body.status
    User.update({ _id: id }, { $set: { status: "active" } })
        .exec()
        .then(() => {
            return res.status(200).json({
                success: true,
                message: 'User is updated',
                // updateUser: updateObject
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
    User.find().sort({ "role": 1 })
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
    User.find().sort({ "currentPlan": 1 })
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