
exports.up = function(knex) {
  return knex.schema.createTable('profiles', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('url')
    table.string('image')
    table.string('pet_peeve')
  })
};

exports.down = function(knex) {
  return knex.schema.droptable('profiles')
};
