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

router.get('/addpost/:id', (req, res) => {
  let user_id = {id : req.params.id}
  res.render('addpost', user_id)
})

router.post('/addpost/:id', (req, res) => {
  let user_id = req.params.id
  let title = req.body.title
  let content = req.body.content
  db.addPost(user_id, title, content)
    .then(res.redirect('/profile/' + user_id))
})

router.get('/blogpost/:id', (req, res) => {
  let user_id = req.params.id
  db.getBlog(user_id)
  .then((posts) =>{
    let viewData = {
      posts: posts
    }
    res.render('blogpost', viewData)
  })
})
module.exports = router
