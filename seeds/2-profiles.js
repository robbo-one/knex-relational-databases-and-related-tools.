exports.seed = function (knex, Promise) {
  return knex('profiles').insert([
    { user_id: 99901, url: 'www.profile.com', image: 'https://www.google.com/search?q=aardvark&tbm=isch&source=iu&ictx=1&fir=jGh1En13wQxEAM%252CLjBglTKTflQDYM%252C_&vet=1&usg=AI4_-kSpf9ERQspw11BJhFG9lD1pN1mWdA&sa=X&ved=2ahUKEwje3vjd_ajuAhWcwTgGHeG-DqEQ_h16BAgaEAE#imgrc=jGh1En13wQxEAM', pet_peeve: 'taxi drivers' },
    { user_id: 99902, url: 'www.profile.com', image: 'https://www.google.com/search?q=aardvark&tbm=isch&source=iu&ictx=1&fir=jGh1En13wQxEAM%252CLjBglTKTflQDYM%252C_&vet=1&usg=AI4_-kSpf9ERQspw11BJhFG9lD1pN1mWdA&sa=X&ved=2ahUKEwje3vjd_ajuAhWcwTgGHeG-DqEQ_h16BAgaEAE#imgrc=jGh1En13wQxEAM', pet_peeve: 'taxi drivers' },
    { user_id: 99903, url: 'www.profile.com', image: 'https://www.google.com/search?q=aardvark&tbm=isch&source=iu&ictx=1&fir=jGh1En13wQxEAM%252CLjBglTKTflQDYM%252C_&vet=1&usg=AI4_-kSpf9ERQspw11BJhFG9lD1pN1mWdA&sa=X&ved=2ahUKEwje3vjd_ajuAhWcwTgGHeG-DqEQ_h16BAgaEAE#imgrc=jGh1En13wQxEAM', pet_peeve: 'taxi drivers' },
    { user_id: 99904, url: 'www.profile.com', image: 'https://www.google.com/search?q=aardvark&tbm=isch&source=iu&ictx=1&fir=jGh1En13wQxEAM%252CLjBglTKTflQDYM%252C_&vet=1&usg=AI4_-kSpf9ERQspw11BJhFG9lD1pN1mWdA&sa=X&ved=2ahUKEwje3vjd_ajuAhWcwTgGHeG-DqEQ_h16BAgaEAE#imgrc=jGh1En13wQxEAM', pet_peeve: 'taxi drivers' },
    { user_id: 99905, url: 'www.profile.com', image: 'https://www.google.com/search?q=aardvark&tbm=isch&source=iu&ictx=1&fir=jGh1En13wQxEAM%252CLjBglTKTflQDYM%252C_&vet=1&usg=AI4_-kSpf9ERQspw11BJhFG9lD1pN1mWdA&sa=X&ved=2ahUKEwje3vjd_ajuAhWcwTgGHeG-DqEQ_h16BAgaEAE#imgrc=jGh1En13wQxEAM', pet_peeve: 'taxi drivers' }

  ])
}