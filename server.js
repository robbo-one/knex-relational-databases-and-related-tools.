const express = require('express')
const hbs = require('express-handlebars')
const dbFuncs = require('./db')
const userRoutes = require('./users')

const server = express()

// Middleware

server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: true }))

// Routes

server.use('/', userRoutes)

server.get('/', (req, res) => {
  dbFuncs.getUsers()
  .then(user => {
    const viewData = {
      user: user
    }
    res.render('index', viewData)
  })
})

server.get('/profiles/:id', (req, res) => {
  dbFuncs.getUserAndProfile(req.params.id)
  .then(user => {
    console.log('showing', user)
    res.render('profiles', user)
  })
})

server.post('/profiles', (req, res) => {
  // console.log('nice body', req.body)
  dbFuncs.addUser(req.body)
    .then(result => {
      // console.log('result', result)
      res.redirect('/')
    })
})

module.exports = server
