
exports.up = function(knex) {
  return knex.schema.createTable('profiles', (table) => {
      table.increments('id').primary()
      table.integer('user_id')
      table.string('favourite_fruit')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('profiles')
};
