const express = require('express')
const router = express.Router()
const path = require('path')
const public = path.join(__dirname, '..', 'public')

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