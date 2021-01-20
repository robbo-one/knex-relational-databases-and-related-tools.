exports.seed = function(knex) {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, name: 'Henry', url: "fghh", profilePic: "https://media.ezibuy.com/productimages/126947/Tangelo_Print/Sara_Scoop_Neck_Tee_SuperZoom_1_10212188848158.jpg", user_id: 99901},
        {id: 2, name: 'Mary', url: "dd", profilePic: "https://res.cloudinary.com/mkrstudio/image/upload/c_fill,w_400/f_auto,q_auto,dpr_3.0/wvnzcontent/resources/worldvision/media/generalimages/asia-syria-sara.jpg", user_id: 99902},
        {id: 3, name: 'Sara', url: "cghnfgfg", profilePic: "https://media1.s-nbcnews.com/i/newscms/2020_35/3408354/200828-sara-ramirez-se-1041a_dca9ae6583a440bac1dbb783a9e89a32.jpg", user_id: 99903}
      ]);
};
