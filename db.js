const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  createUser: createUser,
  createUserProfiles: createUserProfiles,
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users')
  .join('profiles','users.id','profiles.user_id')
  .debug()
  .select()
  .where('users.id', id).first()
}

function createUser(newData, db = connection) {
  return db('users')
.insert(newData)
}

function createUserProfiles(newData, db = connection) {
  console.log(newData)
  return db('profiles')
  //.join('users','profiles.id','profiles.user_id')
  .insert(newData).debug()
}



