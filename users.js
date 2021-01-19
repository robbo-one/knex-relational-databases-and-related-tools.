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
  db.getProfile(req.params.id)
    .then(profile => {
      console.log(profile)
      res.render('profile', profile)
    })
})

router.get('/addUser', (req, res) => {
  res.render('adduser')
}) 

router.post("/addUser", (req, res) => {
  let name = req.body.name
  let address = req.body.address
  let email = req.body.email
  db.addUser(name, email)
    .then((id) =>{
      db.addProfile(id, address)
      .then(res.redirect('/'))
      
    
    })
})



module.exports = router
