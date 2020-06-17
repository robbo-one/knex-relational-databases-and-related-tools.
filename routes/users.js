const express = require("express");

const Users = require("../models").Users;
const Profile = require("../models").Profile;
const Posts = require("../models").Posts;
const Favourites = require("../models").Favourites;

const router = express.Router();

router.get("/", getAll);
router.get("/add", showForm);
router.post("/add", addUser);
router.get("/profile/:id", getOne);
router.post("/profile/:id", addPost);
router.get("/post/:id", getPost);
router.get("/addfav", showFormFav)
router.post("/addfav", addFavUser)

function addFavUser(req, res){
  Favourites.create({user_id: req.body.user_id, fav_id: req.body.fav_id})
    .then(newFavEntry => {

      res.redirect('/addfav')
    })
    .catch(err => console.log('ERROR!!!!',err))
}

function showFormFav(req, res){
  Users.findAll({})
      .then(users => {

        res.render('addfav', {users: parseData(users)})
      })
}

function getPost(req, res){
  const id = req.params.id

  Posts.findAll({
    where:{id:id}
  }).then(post => {
    const [myPost] = parseData(post);

    res.render('post', myPost)
  })
}

function addPost(req, res){
  const { title, content } = req.body
  const id = req.params.id
  
  Posts.create({user_id: id, title, content})
    .then(newPost => {
      res.redirect(`/profile/${id}`)
    })
}

function addUser(req, res) {
  const { name, email, personal_URL, image, interests } = req.body;
  console.log(name, email)
  Users.create({ name, email })
    .then((newUser) => {

      const user_id = parseData(user_id).id;
      Profile.create({ personal_URL, image, interests, user_id: user_id })
        .then(() => {
          
          res.redirect("/");
        }
      );
    })
    .catch((err) => console.log("Error:", err));
}

function showForm(req, res) {
  res.render("add");
}

function getAll(req, res) {
  Users.findAll()
    .then((users) => {
      res.render("index", { users: parseData(users) });
    })
    .catch((err) => {
      res.status(500).send("DATABASE ERROR: " + err.message);
    });
}

function getOne(req, res) {
  Users.findAll({
    include: [
      {
        model: Profile,
        where: {
          user_id: req.params.id,
        },
      },
      {
        model: Posts,
      },
      {
        model: Favourites
      }
    ],
  })
    .then((user) => {
      const [myUser] = parseData(user);
      console.log(myUser)
      res.render("profile", myUser);
    })
    .catch((err) => {
      res.status(500).send("DATABASE ERROR: " + err.message);
    });
}

function parseData(data){
  return JSON.parse(JSON.stringify(data))
}

module.exports = router;
