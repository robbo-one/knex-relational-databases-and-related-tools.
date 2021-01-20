
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, user_id: 99901, title: "apple", content: "aaaaa"},
        {id: 2, user_id: 99902, title: "banana", content: "bbbbbb"},
        {id: 3, user_id: 99903, title: "mandarine", content: "mmmmmm"}
      ]);
    });
};
