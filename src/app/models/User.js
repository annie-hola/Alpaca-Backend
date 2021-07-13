import mongoose from 'mongoose'
mongoose.Promise = global.Promise

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullName: {
        type: String,
        required: true
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
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
    },
    avatar: {
        type: String,
        // required: true
    },
})

export default mongoose.model('User', userSchema)