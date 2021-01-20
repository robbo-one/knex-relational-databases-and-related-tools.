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

router.get('/create', (req, res) => {
  return res.render('create')
})

router.post('/create', (req, res) => {
  const postUser = {name: req.body.name, email: req.body.email}
  const postProfile = {favourite_fruit: req.body.favourite_fruit}
  db.createUser(postUser)
  .then( (id) => {
    postProfile.user_id = id
    return db.createUserProfiles(postProfile)
  }) 
  .then( () => {
    res.redirect('/')
  })
})

router.get('/:id/blogpost', (req, res) => {
  return res.render('blogpost')
})

router.get('/:id/writeblog', (req, res) => {
  const id = req.params.id
  return res.render('writeblog', {id: id})
}) 

router.post('/:id/writeblog', (req, res) => {
  const blogPost = {title: req.body.title, content: req.body.content, user_id: req.params.id}
  db.writeBlog(blogPost)
  .then(() => {
    const id = req.params.id
    //old school way
    // res.redirect('/')
    //best practice
    res.redirect(`/${id}`)
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getUser(id)
    .then(users => {
      const viewData = users
      console.log(users, viewData)
      return res.render('users', viewData)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})












module.exports = router
