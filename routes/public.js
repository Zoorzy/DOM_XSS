const express = require('express')
const router = express.Router()
const path = require('path')
const public = path.join(__dirname, '..', 'public')

router.use(express.static(public))

// GET INDEX FILE
router.get('/', (req, res) => {
  try {
    res.sendFile(path.join(public, 'index.html'))
  } catch (err) {
    res.end(err)
  }
})

router.get('/editor.html', (req, res) => {
  try {
    res.sendFile(path.join(public, 'editor.html'))
  } catch (err) {
    res.end(err)
  }
})


/**
 * Post editor per passare i vari url da scansionare
 * Cercare EJS ecc
 */
router.post('/editor.html', (req, res) => {
  try {
    res.sendFile(path.join(public, 'editor.html'))
  } catch (err) {
    res.end(err)
  }
})

module.exports = router;