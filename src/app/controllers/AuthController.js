const util = require('../../util/auth')
const db = require('../config/db')
const User = db.User

var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')

// export.SignUP //