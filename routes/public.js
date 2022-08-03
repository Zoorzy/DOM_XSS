const express = require('express')
const router = express.Router()
const path = require('path')
const public = path.join(__dirname, '..', 'public')

router.use(express.static(public))
// Parse URL-encoded bodies (as sent by HTML forms)
router.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
router.use(express.json());

// GET INDEX FILE
router.get('/', (req, res) => {
  try {
    res.sendFile(path.join(public, 'index.html'))
  } catch (err) {
    res.end(err)
  }
})

/**
 * Response is the standard and static page editor
 */
router.get('/editor.ejs', (req, res) => {
  try {
    res.sendFile(path.join(public, 'views/editor.ejs'))
  } catch (err) {
    res.end(err)
  }
})


/**
 * Response is the dynamic and user-responsive page editor
 */
router.post('/editor.ejs', (req, res) => {
  try {
    /*
    res.sendFile(path.join(public, 'views/editor.html'))
    */
    let url = req.body.url
    console.log(url)
    res.render(path.join(public, 'views/editor.ejs'), { url: url })
  } catch (err) {
    res.end(err)
  }
})

module.exports = router;