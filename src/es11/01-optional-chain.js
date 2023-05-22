const users = {
  rafael:{
    country: 'col'
  },
  ana:{
    country: 'mx'
  }
}

console.table(users);
console.log(users.rafael);
console.log(users.ana);

//encadenando normal
console.log(users.rafael.country);

//* Encadenando con optional chain si no existe retorna undefine
console.log(users?.juan?.country);