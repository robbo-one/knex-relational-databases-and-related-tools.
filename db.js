const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProfile: getProfile,
  addUser: addUser,
  addProfile: addProfile,
  
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function getProfile (id, db = connection) {
  return db('users').join('profiles', 'profiles.user_id', 'users.id')
  .where('user_id', id)
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

