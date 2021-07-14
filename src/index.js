import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import dotenv from 'dotenv'
import mainRoutes from './routes/index.js'

const app = express()
dotenv.config()
//** app use 
app.use(bodyParser.json())
//parse the request of content-type applicaion/x-wwww-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(logger('dev'))
app.use('/', mainRoutes)

//* DB connect
import db from './config/db/index.js'
db.connect()

const port = 3000
// var morgan = require('morgan')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})