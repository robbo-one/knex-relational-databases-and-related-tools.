
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, user_id: '99901', url: 'www.funkytown5241.com', vegetable: 'aubergine'},
        {id: 2, user_id: '99902', url: 'www.hungryhippo.com', vegetable: 'carrot'},
        {id: 3, user_id: '99903', url: 'www.niceanimals.com', vegetable: 'potato'},
        {id: 4, user_id: '99904', url: 'www.funkytown5241.com', vegetable: 'kumara'},
        {id: 5, user_id: '99905', url: 'www.hungryhippo.com', vegetable: 'bok choy'},
        {id: 6, user_id: '99906', url: 'www.niceanimals.com', vegetable: 'chard'},
        {id: 7, user_id: '99907', url: 'www.funkytown5241.com', vegetable: 'broccoli'},
        {id: 8, user_id: '99908', url: 'www.hungryhippo.com', vegetable: 'cauliflower'},
        {id: 9, user_id: '99909', url: 'www.niceanimals.com', vegetable: 'swede'},
        {id: 10, user_id: '99910', url: 'www.funkytown5241.com', vegetable: 'parsnip'},
        {id: 11, user_id: '99911', url: 'www.hungryhippo.com', vegetable: 'courgette'},
        {id: 12, user_id: '99912', url: 'www.niceanimals.com', vegetable: 'celery'},
        {id: 13, user_id: '99913', url: 'www.funkytown5241.com', vegetable: 'olive'},
        {id: 14, user_id: '99914', url: 'www.hungryhippo.com', vegetable: 'onion'},
        {id: 15, user_id: '99915', url: 'www.niceanimals.com', vegetable: 'garlic'},
        {id: 16, user_id: '99916', url: 'www.funkytown5241.com', vegetable: 'spring onions'},
        {id: 17, user_id: '99917', url: 'www.hungryhippo.com', vegetable: 'cabbage'},
        {id: 18, user_id: '99918', url: 'www.niceanimals.com', vegetable: 'red cabbage'},
        {id: 19, user_id: '99919', url: 'www.funkytown5241.com', vegetable: 'turnip'},
        {id: 20, user_id: '99920', url: 'www.hungryhippo.com', vegetable: 'spinach'},
        {id: 21, user_id: '99921', url: 'www.niceanimals.com', vegetable: 'radish'},
        {id: 22, user_id: '99922', url: 'www.funkytown5241.com', vegetable: 'silverbeet'},
        {id: 23, user_id: '99923', url: 'www.hungryhippo.com', vegetable: 'kakarot'},
        {id: 24, user_id: '99924', url: 'www.niceanimals.com', vegetable: 'none'},
        {id: 25, user_id: '99925', url: 'www.hungryhippo.com', vegetable: 'beans'},
        {id: 26, user_id: '99926', url: 'www.niceanimals.com', vegetable: 'potato'}
      ]);
    });
};
