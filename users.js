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
      res.render('userProfile', profiles)

    })
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
      newProfile.user_id = result[0]
      db.addProfile(newProfile)
        .then((res2) => {
          res.redirect("/")
        })
    })

})

router.get("/postsList/:id", (req, res) => {
  let id = req.params.id

  db.getUserAndBlogPosts(id)
    .then(post => {
      console.log(post)
      res.render("postsList", post)
    })
})

module.exports = router
