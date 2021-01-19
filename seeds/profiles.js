
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        { user_id: 99901, url:'aardvark@example.org'},
        { user_id: 99902, url: 'baboon@example.org' },
        { user_id: 99903, url: 'capybara@example.org' },
        { user_id: 99904, url: 'duck@example.org' },
        { user_id: 99905, url: 'elephant@example.org' },
        { user_id: 99906, url: 'flying.fox@example.org' },
        { user_id: 99907, url: 'gila.monster@example.org' },
        { user_id: 99908, url: 'heron@example.org' },
        { user_id: 99909, url: 'impala@example.org' },
        { user_id: 99910, url:'jerboa@example.org' },
        { user_id: 99911, url: 'kinkajou@example.org' },
        { user_id: 99912, url:'lemur@example.org' },
        { user_id: 99913, url: 'mongoose@example.org' },
        { user_id: 99914, url: 'nyala@example.org' },
        { user_id: 99915, url: 'ocelot@example.org' },
        { user_id: 99916, url: 'panda@example.org' },
        { user_id: 99917, url: 'quokka@example.org' },
        { user_id: 99918, url:'rail@example.org' },
        { user_id: 99919, url:'sloth@example.org' },
        { user_id: 99920, url:'terrapin@example.org' },
        { user_id: 99921, url: 'urial@example.org' },
        { user_id: 99922, url: 'viscacha@example.org' },
        { user_id: 99923, url: 'wombat@example.org' },
        { user_id: 99924, url: 'xerus@example.org' },
        { user_id: 99925, url: 'yak@example.org' },
        { user_id: 99926, url: 'zebu@example.org' }
      ]);
    });
};
