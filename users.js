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
  //else {getAllPosts}

  let person = {
    id: id,
    name: "",
    email: "",
    url: "",
    picture: "",
     posts : { title: "",
              content : ""}    
  }
  db.getUsersData(id)
    .then(user => {
      person.id = user.id 
      person.name = user.name
      person.email = user.email
      person.url = user.url
      person.picture = user.picture
      db.getAllPostsPerson(id) 
      .then(post => {
        person.posts = post
        return res.render('profilePage',  person)
      })
      //  console.log(user)

      // return res.render('profilePage',  user)
      // .catch(err => {
      //   res.status(500).send('DATABASE ERROR: ' + err.message)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
router.post('/profile/:id', (req, res) => {
  const id = req.params.id
  let newPost = {
    title: req.body.title,
    content: req.body.content,
  }
  db.makePost(id, newPost.title , newPost.content)
    .then(() => {
      res.redirect('/profile/' + id )
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

router.get('/posts', (req,res) => {
  db.getPosts()
  .then(posts => {
    return res.render('blogPage', { posts: posts })
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.get("/addUser", (req, res) => {

  res.render("addUser", {})
})

module.exports = router
