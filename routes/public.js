const express = require('express')
const { appendFile } = require('fs')
const router = express.Router()
const path = require('path')
const public = path.join(__dirname, '..', 'public')
//const bodyParser = require('body-parser')

router.use(express.static(public))

// GET INDEX FILE
router.get('/', (req, res) => {
  try{
    res.sendFile(path.join(public, 'index.html'))
  } catch (err) {
    res.end(err)
  }
})

module.exports = router;