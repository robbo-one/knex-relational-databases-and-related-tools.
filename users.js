const express = require('express')
const { addUser } = require('./db')

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

router.get('/profile/:id', (req, res) => {
  db.getProfile(req.params.id)
    .then(profile => {
      // console.log(profile)
      return res.render('profile', profile)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/admin/add', (req, res) => {
  res.render('addUser')
})


router.post('/admin/add', (req, res) => {
  console.log(req.body)
  return addUser(req.body)
    .then(result => {
      res.redirect('/')
    }) 

  })

module.exports = router
