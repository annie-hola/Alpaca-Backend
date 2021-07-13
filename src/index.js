const express = require('express')
const app = express()
var morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

//* DB connect
const db = require('./config/db')
db.connect()

var corsOptions = {
  origin: 'http://localhost:8081'
}

app.use(cors(corsOptions))

// parse request of content-type application/json
app.use(bodyParser.json())

//parse the request of content-type applicaion/x-wwww-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//set PORT, listen for request
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})