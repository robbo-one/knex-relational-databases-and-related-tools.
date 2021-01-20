exports.seed = function (knex, Promise) {
  return knex('favourites').insert([
    { user_id: 99901, favourite_id: 99923 },
    { user_id: 99903, favourite_id: 99902 },
    { user_id: 99902, favourite_id: 99911 },
    { user_id: 99901, favourite_id: 99916 },
    { user_id: 99905, favourite_id: 99918 },
    { user_id: 99901, favourite_id: 99912 },
  ])
}