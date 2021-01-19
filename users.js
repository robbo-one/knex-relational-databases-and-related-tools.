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

router.post("/addUser", (req, res) => {
  let newUser = {
    name: req.body.name,
    email: req.body.email,
    url: req.body.url,
    picture: req.body.picture
  }
  
  db.createUser(newUser.name,newUser.email)
    .then((result1) => {
        db.createProfile(result1[0], newUser.url, newUser.picture )
      .then(() => {
        res.redirect("/")
      })
      })
})

router.get("/addUser", (req, res) => {

  res.render("addUser", {})
})

module.exports = router
