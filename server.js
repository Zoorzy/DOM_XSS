const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const cors = require('cors')
const axios = require('axios')
const port = 80

app.use(
  cors({
    origin: `*`
  })
)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// IMPORT ROUTES
const attackRoutes = require('./routes/api/attack')
app.use('/api/attack', attackRoutes)
const publicRoutes = require('./routes/public')
app.use('/', publicRoutes)

// PROXY SERVER TO PREVENT CORS WEB BROWSERS' POLICY
app.post('/proxyServer', (req, res) => {

  let endpoint = req.body.url

  axios.get(endpoint).then(response => {
    res.setHeader('Content-Type', 'text/plain')
    res.send(response.data)
  }).catch(err => {
    res.json(err)
  })
  
})

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log('Connected to DB')
});

// LISTEN
app.listen(port)