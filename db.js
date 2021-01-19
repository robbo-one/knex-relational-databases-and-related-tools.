const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  createUser: createUser,
  createProfile: createProfile
}

function getUsers (db = connection) {
  return db('users')
  .select()
}

function getUser (id, db = connection) {
  return db('users')
  .where('users.id', id)
  .first()
  .join('profiles','users.id','profiles.user_id')
  .select('*', "users.id AS id")
}
function createUser (name, email, db = connection){
  return db ('users')
  .insert ({name: name, email : email})

}
function createProfile (user_id,url, picture, db = connection){
  return db ('profiles')
  .insert ({user_id:user_id, url:url, picture:picture})
}