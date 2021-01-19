
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, user_id: '99901', url: 'www.funkytown5241.com', vegetable: 'aubergine'},
        {id: 2, user_id: '99902', url: 'www.hungryhippo.com', vegetable: 'carrot'},
        {id: 3, user_id: '99903', url: 'www.niceanimals.com', vegetable: 'potato'}
      ]);
    });
};
