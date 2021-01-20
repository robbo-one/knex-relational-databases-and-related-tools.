const express = require('express')

const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      return res.render('index', { users: users })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/addUser', (req, res) => {
  res.render('addUser', {})
  })

router.post('/addUser', (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
  }
  const profile = {
    url: req.body.url,
    vegetable: req.body.vegetable,
    
  }
  console.log(profile)
  db.addUser(user, profile)
  .then(() => {
    res.redirect('/')
})
})


  // this route to sit at bottom because of /:id bit
router.get('/:id', (req, res) => {
    db.getProfile(req.params.id)
    .then(info => {
      console.log(info)
      return res.render('profile', info)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


module.exports = router
