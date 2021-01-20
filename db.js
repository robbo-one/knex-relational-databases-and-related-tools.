const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProfile: getProfile,
  addUser: addUser,
  addProfile: addProfile,
  addPost : addPost,
  getBlog: getBlog
  
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function getProfile (id, db = connection) {
  return db('users').join('profiles', 'profiles.user_id', 'users.id')
  .where('users.id', id)
  .select('*', 'profiles.user_id AS id', 'users.id AS user_id')
  .first()

}

function addUser (name, email, db = connection) {
  return db('users')
  .insert({name : name, email: email})
}

function addProfile (user_id, address, db = connection) {
  return db('profiles')
  .insert({address : address, user_id : user_id})
}

function addPost (user_id, title, content, db = connection) {
  return db('posts')
  .insert({user_id : user_id, title : title, content : content})
}

function getBlog (user_id, db = connection) {
  return db('posts')
  .where('user_id', user_id)
}
