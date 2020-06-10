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
      return queryInterface.bulkInsert('Users', [
      { id: 99901, name: 'Ambitious Aardvark', email: 'aardvark@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99902, name: 'Bamboozled Baboon', email: 'baboon@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99903, name: 'Curious Capybara', email: 'capybara@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99904, name: 'Dilapidated Duck', email: 'duck@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99905, name: 'Exuberant Elephant', email: 'elephant@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99906, name: 'Fascinated Flying Fox', email: 'flying.fox@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99907, name: 'Generous Gila Monster', email: 'gila.monster@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99908, name: 'Hilarious Heron', email: 'heron@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99909, name: 'Intransigent Impala', email: 'impala@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99910, name: 'Jocular Jerboa', email: 'jerboa@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99911, name: 'Kafkaesque Kinkajou', email: 'kinkajou@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99912, name: 'Loquacious Lemur', email: 'lemur@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99913, name: 'Misanthropic Mongoose', email: 'mongoose@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99914, name: 'Nonchalant Nyala', email: 'nyala@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99915, name: 'Ornery Ocelot', email: 'ocelot@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99916, name: 'Peaceful Pangolin', email: 'panda@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99917, name: 'Querulous Quokka', email: 'quokka@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99918, name: 'Resolute Rail', email: 'rail@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99919, name: 'Senescent Sloth', email: 'sloth@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99920, name: 'Tumultuous Terrapin', email: 'terrapin@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99921, name: 'Unassailable Urial', email: 'urial@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99922, name: 'Voracious Viscacha', email: 'viscacha@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99923, name: 'Wondering Wombat', email: 'wombat@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99924, name: 'Xenial Xerus', email: 'xerus@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99925, name: 'Yielding Yak', email: 'yak@example.org', createdAt: new Date(),
        updatedAt: new Date() },
      { id: 99926, name: 'Zaftig Zebu', email: 'zebu@example.org', createdAt: new Date(),
      updatedAt: new Date() }
    ], {})
},

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {})
  }
};
