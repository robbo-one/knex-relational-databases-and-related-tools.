
exports.up = function(knex) {
  return knex.schema.createTable('profiles', (table) => {
      table.increments('id').primary()
      table.integer('user_id')
      table.string('random friend')
      table.string('favourite fruit')
      table.string('favourite cheese')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('profiles')
};
