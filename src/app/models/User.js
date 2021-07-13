const mongoose = require('mongoose')

const User = mongoose.model(
    'User',
    new mongoose.Scheme({
        _id: ObjectId,
        firstName: String,
        lastName: String,
        username: {
            type: String,
            required: true
        },
        email: String,
        password: {
            type: String,
            required: true,
            minLength: 8
        },
        status: Boolean,
        token: {
            type: String
        },
    })
)

module.exports = Use