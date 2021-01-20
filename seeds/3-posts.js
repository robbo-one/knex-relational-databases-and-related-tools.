exports.seed = function (knex, Promise) {
  return knex('posts').insert([
    { user_id: 99901, title: 'My first blog', content: "fkjdkdjfkj" },
    { user_id: 99902, title: 'The Day I turned vegan', content: "fjdkjfdkjf"},
    { user_id: 99903, title: 'Dev Academy or Bust', content: "dfdfdfsf"},
    { user_id: 99903, title: 'Poncho and Cleo', content: "dfkjdkfjdf"},
    { user_id: 99905, title: 'Great restaurants in Welly', content: "jdkfkdfjkdfjk"}])
  }
  