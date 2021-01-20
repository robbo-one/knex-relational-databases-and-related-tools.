
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { user_id: 99901, favourite_id: 99904},
        { user_id: 99901, favourite_id: 99907},
        { user_id: 99901, favourite_id: 99911}
        
      ]);
    });
};
