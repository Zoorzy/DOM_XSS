const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const port = 8080

const cors = require('cors')
//const axios = require('axios')

app.use(
  cors({
    //origin: `http://localhost:${port}`
    origin: `*`
  })
)
/*
//app.get(':endpoint([\\/\\w\\.-]*)', (req, res) => {
app.get(':endpoint([\\/\\w\\.-]*)', (req, res) => {
  let endpoint = 'https://www.example.com'
  //let endpoint = 'https://date.nager.at/api/v2' + req.params.endpoint

  axios.get(endpoint).then(response => {
    res.setHeader('Content-Type', 'text/plain')
    res.send(response.data)
  }).catch(err => {
    res.json(err)
  })
})
*/

app.use(bodyParser.json())

// IMPORT ROUTES
const attackRoutes = require('./routes/attack')
app.use('/api/attack', attackRoutes)
const publicRoutes = require('./routes/public')
app.use('/', publicRoutes)

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log('Connected to DB')
});

// LISTEN
app.listen(port)