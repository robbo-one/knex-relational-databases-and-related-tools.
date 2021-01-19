exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        { user_id: 99901, address: 'nah'},
        { user_id: 99902, address: 'Bamboozled Baboon'},
        { user_id: 99903, address: 'Curious Capybara'},
        { user_id: 99904, address: 'Dilapidated Duck'  },
        { user_id: 99905, address: 'Exuberant Elephant'  },
        { user_id: 99906, address: 'Fascinated Flying Fox'},
        { user_id: 99907, address: 'Generous Gila Monster'},
        { user_id: 99908, address: 'Hilarious Heron'},
        { user_id: 99909, address: 'Intransigent Impala'},
        { user_id: 99910, address: 'Jocular Jerboa'},
        { user_id: 99911, address: 'Kafkaesque Kinkajou'},
        { user_id: 99912, address: 'Loquacious Lemur'},
        { user_id: 99913, address: 'Misanthropic Mongoose'},
        { user_id: 99914, address: 'Nonchalant Nyala'},
        { user_id: 99915, address: 'Ornery Ocelot'},
        { user_id: 99916, address: 'Peaceful Pangolin'},
        { user_id: 99917, address: 'Querulous Quokka'},
        { user_id: 99918, address: 'Resolute Rail'},
        { user_id: 99919, address: 'Senescent Sloth'},
        { user_id: 99920, address: 'Tumultuous Terrapin'},
        { user_id: 99921, address: 'Unassailable Urial'},
        { user_id: 99922, address: 'Voracious Viscacha'},
        { user_id: 99923, address: 'Wondering Wombat'},
        { user_id: 99924, address: 'Xenial Xerus'},
        { user_id: 99925, address: 'Yielding Yak'},
        { user_id: 99926, address: 'Zaftig Zebu'}
      ]);
    });
};
