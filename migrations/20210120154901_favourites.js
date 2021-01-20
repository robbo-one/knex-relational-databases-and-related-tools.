
exports.up = function(knex) {
  return knex.schema.createTable('favourites', (table) => {
    table.increments('id').primary
    table.integer('user_id')
    table.integer('favourite_id')
  })
};

exports.down = function(knex) {
  return knex.schema.droptable('favourites')
};
