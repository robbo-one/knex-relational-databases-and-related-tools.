
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {user_id: 99908, title: 'i hate my life', content: "dear diary, it's pretty self explanatory, and i did it to myself"},
        {user_id: 99908, title: 'i still hate my life', content: "dear diary, it's still pretty self explanatory, and i still did it to myself"}
      ]);
    });
};