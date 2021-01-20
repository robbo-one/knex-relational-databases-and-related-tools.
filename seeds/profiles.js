
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, user_id: '99901',  favourite_fruit: 'Strawberry',  },
        {id: 2, user_id: '99902',  favourite_fruit: 'Banana',  },
        {id: 3, user_id: '99903',  favourite_fruit: 'Strawberry',  },
        {id: 4, user_id: '99904',  favourite_fruit: 'Banana',  },
        {id: 5, user_id: '99905',  favourite_fruit: 'Banana',  },
        {id: 6, user_id: '99906',  favourite_fruit: 'Mango',  },
        {id: 7, user_id: '99907',  favourite_fruit: 'Strawberry',  },
        {id: 8, user_id: '99908',  favourite_fruit: 'Mango',  },
        {id: 9, user_id: '99909',  favourite_fruit: 'Strawberry',  },
        {id: 10, user_id: '99910',  favourite_fruit: 'Banana',  },
        {id: 11, user_id: '99911',  favourite_fruit: 'Mango',  },
        {id: 12, user_id: '99912',  favourite_fruit: 'Strawberry',  },
        {id: 13, user_id: '99913',  favourite_fruit: 'Banana',  },
        {id: 14, user_id: '99914',  favourite_fruit: 'Banana',  },
        {id: 15, user_id: '99915',  favourite_fruit: 'Banana',  },
        {id: 16, user_id: '99916',  favourite_fruit: 'Mango',  },
        {id: 17, user_id: '99917',  favourite_fruit: 'Strawberry',  },
        {id: 18, user_id: '99918',  favourite_fruit: 'Strawberry',  },
        {id: 19, user_id: '99919',  favourite_fruit: 'Strawberry',  },
        {id: 20, user_id: '99920',  favourite_fruit: 'Banana',  },
        {id: 21, user_id: '99921',  favourite_fruit: 'Mango',  },
        {id: 22, user_id: '99922',  favourite_fruit: 'Strawberry',  },
        {id: 23, user_id: '99923',  favourite_fruit: 'Strawberry',  },
        {id: 24, user_id: '99924',  favourite_fruit: 'Strawberry',  },
        {id: 25, user_id: '99925',  favourite_fruit: 'Strawberry',  },
        {id: 26, user_id: '99926',  favourite_fruit: 'Strawberry',  }
      ]);
    });
};
