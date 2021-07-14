import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    company: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true
    },
    currentPlan: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    },
    status: {
        type: String,
    },
    avatar: {
        type: String,
        // required: true
    },
    // tokens: [{
    //     token: {
    //         type: String,
    //         required: true
    //     }
    // }]
})

userSchema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

export default mongoose.model('User', userSchema)