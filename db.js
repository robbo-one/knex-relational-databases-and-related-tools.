const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProfile: getProfile,
  addUser: addUser
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function getProfile (id, db = connection) {
  return db('profiles').where('user_id', id).first()
}

function addUser (user, profile, db = connection) {
  return db('users').insert(user)
  .then((Rose) => {
   profile.user_id = Rose[0]
   return db('profiles').insert(profile)
  })
}
