const jwt = require('jsonwebtoken')
const util = require('../util/auth')
const db = require('../config/db')
const User = db.User

vertifyToken = (req, res, next) => {
    let token = req.header['x-access-token']

    // 403: Forbideen Error
    if (!token) {
        return res.status(403).send({
            message: 'No token provided'
        })
    }

}

module.exports = {
    vertifyToken
}