const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)


function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function getUserById(id, db = connection){
  return db('users')
  .join('profiles', 'users.id', 'profiles.user_id')
  .where('users.id', id)
  .select("*", "users.id AS id"
  )
  .first()
}

function addUser (person, db = connection) {
  return db('users')
  .insert(person)
}

function addProfile (person, db = connection){
  return db('profiles')
  .insert(person)
}

function getUserAndBlogPosts (id, db = connection) {
  return db("users")
  .join("posts", "users.id", "posts.user_id")
  .where("user_id", id)
  .select("*", "users.id AS id")
  .first()
}

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getUserById: getUserById,
  addUser: addUser,
  addProfile: addProfile,
  getUserAndBlogPosts: getUserAndBlogPosts
}