const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const port = 8080

const cors = require('cors')

app.use(
  cors({
    //origin: `http://localhost:${port}`
    origin: `*`
  })
)

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