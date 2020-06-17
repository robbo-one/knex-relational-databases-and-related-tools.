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
   return queryInterface.bulkInsert('Posts', [
     {user_id: 99901, title: 'Tough times', content: 'This is asbout tought time in tough world', createdAt: new Date(), updatedAt: new Date()},
     {user_id: 99901, title: 'Tought times', content: 'This is asbout tought time in tough world', createdAt: new Date(), updatedAt: new Date()},
     {user_id: 99901, title: 'Thought times', content: 'This is asbout tought time in tough world', createdAt: new Date(), updatedAt: new Date()},
     {user_id: 99902, title: 'Tough times', content: 'This is asbout tought time in tough world', createdAt: new Date(), updatedAt: new Date()},
     {user_id: 99904, title: 'Tough times', content: 'This is asbout tought time in tough world', createdAt: new Date(), updatedAt: new Date()},
     {user_id: 99926, title: 'Tough times', content: 'This is asbout tought time in tough world', createdAt: new Date(), updatedAt: new Date()},
   ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Posts', null, {})
  }
};
