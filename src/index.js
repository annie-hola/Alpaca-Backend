import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import logger from 'morgan'

import mainRoutes from './server/routes/main.js'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

app.use('/', mainRoutes)

// set up mongoose
mongoose.connect('mongodb+srv://phong:123@cluster0.fxtkg.mongodb.net/[BE]_System_initialization?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.log('Error connecting to database');
  });
const port = 3000
// var morgan = require('morgan')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
