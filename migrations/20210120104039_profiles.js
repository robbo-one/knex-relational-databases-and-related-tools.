
exports.up = function(knex) {
  return knex.schema.createTable('profiles', (table) => {
    table.increments('id').primary()
    table.string('user_id')
    table.string('url')
    table.string('profile picture')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('profiles')
};
