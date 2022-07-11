const express = require('express')
const app = express()

const cors = require('cors')
const axios = require('axios')

app.use(
  cors({
    //origin: `http://localhost:${port}`
    origin: `*`
  })
)

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