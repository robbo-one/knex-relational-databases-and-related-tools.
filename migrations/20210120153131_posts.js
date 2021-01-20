exports.up = (knex, Promise) => {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('title')
    table.string('content')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('posts')
}