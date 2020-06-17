'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Profiles',[
     {user_id: 99901, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99902, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99903, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99904, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99905, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99906, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99907, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99908, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99909, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99910, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99911, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99912, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99913, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99914, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99915, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99916, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99917, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99918, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99919, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99920, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99921, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99922, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99923, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99924, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99925, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
     {user_id: 99926, personal_URL: 'google.com', interests: 'Testing', image: 'https://picsum.photos/200/300', createdAt: new Date(),
        updatedAt: new Date()},
   ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Profiles', null, {})
  }
};
