
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, user_id: '99901', random_friend: 'Tom', favourite_fruit: 'Strawberry',  },
        {id: 2, user_id: '99902', random_friend: 'Tom', favourite_fruit: 'Banana',  },
        {id: 3, user_id: '99903', random_friend: 'Tom', favourite_fruit: 'Strawberry',  },
        {id: 4, user_id: '99904', random_friend: 'Tom', favourite_fruit: 'Banana',  },
        {id: 5, user_id: '99905', random_friend: '', favourite_fruit: 'Banana',  },
        {id: 6, user_id: '99906', random_friend: '', favourite_fruit: 'Mango',  },
        {id: 7, user_id: '99907', random_friend: '', favourite_fruit: 'Strawberry',  },
        {id: 8, user_id: '99908', random_friend: '', favourite_fruit: 'Mango',  },
        {id: 9, user_id: '99909', random_friend: '', favourite_fruit: 'Strawberry',  },
        {id: 10, user_id: '99910', random_friend: '', favourite_fruit: 'Banana',  },
        {id: 11, user_id: '99911', random_friend: '', favourite_fruit: 'Mango',  },
        {id: 12, user_id: '99912', random_friend: '', favourite_fruit: 'Strawberry',  },
        {id: 13, user_id: '99913', random_friend: '', favourite_fruit: 'Banana',  },
        {id: 14, user_id: '99914', random_friend: '', favourite_fruit: 'Banana',  },
        {id: 15, user_id: '99915', random_friend: '', favourite_fruit: 'Banana',  },
        {id: 16, user_id: '99916', random_friend: '', favourite_fruit: 'Mango',  },
        {id: 17, user_id: '99917', random_friend: '', favourite_fruit: 'Strawberry',  },
        {id: 18, user_id: '99918', random_friend: '', favourite_fruit: 'Strawberry',  },
        {id: 19, user_id: '99919', random_friend: '', favourite_fruit: 'Strawberry',  },
        {id: 20, user_id: '99920', random_friend: '', favourite_fruit: 'Banana',  },
        {id: 21, user_id: '99921', random_friend: '', favourite_fruit: 'Mango',  },
        {id: 22, user_id: '99922', random_friend: '', favourite_fruit: 'Strawberry',  },
        {id: 23, user_id: '99923', random_friend: '', favourite_fruit: 'Strawberry',  },
        {id: 24, user_id: '99924', random_friend: '', favourite_fruit: 'Strawberry',  },
        {id: 25, user_id: '99925', random_friend: '', favourite_fruit: 'Strawberry',  },
        {id: 26, user_id: '99926', random_friend: '', favourite_fruit: 'Strawberry',  }
      ]);
    });
};
