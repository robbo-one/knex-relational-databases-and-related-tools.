
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        { user_id: 99901, title:'aardvark post' , content: 'I am aadvark and this is content'},
        { user_id: 99902, title: 'baboon post' , content: 'I am baboon and this is content'},
        { user_id: 99903, title: 'capybara post' , content: 'I am capybara and this is content'},
        { user_id: 99904, title: 'duck post' , content: 'I am duck and this is content'},
        { user_id: 99905, title: 'elephant post' , content: 'I am elephant and this is content'},
        { user_id: 99906, title: 'flying.fox post' , content: 'I am flying.fox and this is content'},
        { user_id: 99907, title: 'gila.monster post' , content: 'I am gila.monster and this is content'},
        { user_id: 99908, title: 'heron post' , content: 'I am heron and this is content'},
        { user_id: 99909, title: 'impala post' , content: 'I am impala and this is content'},
        { user_id: 99910, title:'jerboa post' , content: 'I am ajerboa and this is content'},
        { user_id: 99911, title: 'kinkajou post' , content: 'I am kinkajou and this is content'},
        { user_id: 99912, title:'lemur post' , content: 'I am lemur and this is content'},
        { user_id: 99913, title: 'mongoose post' , content: 'I am mongoose and this is content'},
        { user_id: 99914, title: 'nyala post' , content: 'I am nyala and this is content'},
        { user_id: 99915, title: 'ocelot post' , content: 'I am ocelot and this is content'},
        { user_id: 99916, title: 'panda post' , content: 'I am panda and this is content'},
        { user_id: 99917, title: 'quokka post' , content: 'I am quokka and this is content'},
        { user_id: 99918, title:'rail post' , content: 'I am rail and this is content'},
        { user_id: 99919, title:'sloth post' , content: 'I am sloth and this is content'},
        { user_id: 99920, title:'terrapin post' , content: 'I am terrapin and this is content'},
        { user_id: 99921, title: 'urial post' , content: 'I am urial and this is content'},
        { user_id: 99922, title: 'viscacha post' , content: 'I am viscacha and this is content'},
        { user_id: 99923, title: 'wombat post' , content: 'I am wombat and this is content'},
        { user_id: 99924, title: 'xerus post' , content: 'I am xerus and this is content'},
        { user_id: 99925, title: 'yak post' , content: 'I am yak and this is content'},
        { user_id: 99926, title: 'zebu post' , content: 'I am zebu and this is content'}
      ]);
    });
};
