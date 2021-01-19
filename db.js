const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getUserAndProfile
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}


function getUserAndProfile (id, db = connection) {
  return db('users')
  .join('profiles','profiles.users_id','users.id')
  .where('users.id', id)
  .first()
}