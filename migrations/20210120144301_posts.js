
exports.up = function(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').primary
    table.integer('user_id')
    table.string('title')
    table.string('content')
  })  
};

exports.down = function(knex) {
  return knex.schema.droptable('posts')

};
