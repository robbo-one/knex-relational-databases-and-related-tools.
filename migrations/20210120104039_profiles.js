
exports.up = function(knex) {
  return knex.schema.createTable('profiles', (table) => {
    table.increments('id').primary()
    table.integer('users_id')
    table.string('url')
    table.string('picture')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('profiles')
};
