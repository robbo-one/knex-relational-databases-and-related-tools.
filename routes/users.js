const express = require('express')

const Users = require('../models').Users

const router = express.Router()

router.get('/', (req, res) => {
  Users.findAll()
    .then(users => {
      console.log(users[0])

      return res.render('index',{users: users.map(user => user.dataValues)})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
