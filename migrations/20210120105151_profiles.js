
exports.up = (knex, Promise) => {
    return knex.schema.createTable('profiles', (table) => {
      table.increments('id').primary()
      table.string('user_id')
      table.string('url')
      table.string('picture')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('profiles')
  }