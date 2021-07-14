import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'

import mainRoutes from './routes/index.js'
import cookieParser from 'cookie-parser'
const app = express()

//** app use 
app.use(bodyParser.json())
//parse the request of content-type applicaion/x-wwww-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser());

app.use(logger('dev'))
app.use('/', mainRoutes)

//* DB connect
import db from './config/db/index.js'
db.connect()

//middleware
app.use(express.json())

const port = 3000
// var morgan = require('morgan')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})