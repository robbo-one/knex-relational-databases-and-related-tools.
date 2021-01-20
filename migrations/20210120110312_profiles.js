exports.up = (knex, Promise) => {
  return knex.schema.createTable('profiles', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('name')
    table.string('url')
    table.string('profilePic')
  

  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('profiles')
}
