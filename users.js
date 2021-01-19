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
      console.log(result[0])
      res.redirect('/admin/add/' + result[0])
    }) 

  })

router.get('/admin/add/:id', (req, res) => {
  res.render('addProfile')
})

router.post('/admin/add/:id', (req, res) => {
  let profile = {
    user_id: req.params.id,
    url: req.body.url,
    image: req.body.image,
    pet_peeve: req.body.pet_peeve
  }
  return db.addProfile(profile)
    .then(result => {
      console.log(result)
      res.redirect('/')
    })
})

module.exports = router
