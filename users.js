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

router.get('/profile/:id', (req, res) => {
  const id = req.params.id
  db.getUser(id)
    .then(user => {
      // console.log(user)
      return res.render('profilePage',  user )
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})



module.exports = router
