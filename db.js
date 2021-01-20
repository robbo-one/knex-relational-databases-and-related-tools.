const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getUserAndProfile,
  addUser
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

function addUser (userAndProfile, db = connection) {
  const user = {
    name: userAndProfile.name,
    email: userAndProfile.email
  }
  console.log('uAP', userAndProfile)
  return db('users')
    .insert(user)
     .then(info => {
       const profile = {
         users_id: info[0],
         url: userAndProfile.url,
         picture: userAndProfile.picture
       }
       return db('profiles').insert(profile)
     })
}