
exports.up = function(knex) {
  return knex.schema.createTable('favourites', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.interger('favourite_id')
    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('favourites')

};
