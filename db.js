const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProfile: getProfile,
  addUser: addUser,
  addProfile: addProfile,
  getUserPosts: getUserPosts,
  getPostContent:getPostContent,
  addFavourite:addFavourite
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function getProfile (id, db = connection) {
  return db('profiles')
    .where('user_id', id)
    .select()
    .join('users', 'users.id', 'profiles.user_id')
    .first()
}

function addUser (newUser, db = connection) {
  return db('users')
    .insert(newUser)
}

function addProfile (newProfile, db = connection) {
  return db('profiles')
    .insert(newProfile)
}

function getUserPosts(id, db = connection) {
  return db('posts')
    .where('user_id', id)
}

function getPostContent(id, db = connection) {
  return db('posts')
    .where('id', id)
    .first()
}

function addFavourite(user_id, favourite_id, db = connection) {
  const newFav = {
    user_id: user_id,
    favourite_id: favourite_id
  }
  return db('favourites')
    .insert(newFav)
}