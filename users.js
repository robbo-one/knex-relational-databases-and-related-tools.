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

router.get('/userProfile/:id', (req, res) => {

  let id = req.params.id

  db.getUserById(id)
    .then(profiles => {
      // console.log(profiles)

      console.log(profiles)

      res.render('userProfile', profiles)

    })
  // .catch(err => {
  //   res.status(500).send('DATABASE ERROR: ' + err.message)
  // })

})

router.get("/addProfile", (req, res) => {

  res.render("addProfile", {})
})

router.post("/addProfile", (req, res) => {

  let newUser = {
    name: req.body.username,
    email: req.body.email
  }

  let newProfile = {
    name: req.body.name,
    url: req.body.url,
    profilePic: req.body.profilePic
  }

  db.addUser(newUser)
    .then((result) => {
      db.addProfile(result[0], newProfile)
        .then((res2) => {
              res.redirect("/")
        })
    })

})

module.exports = router
