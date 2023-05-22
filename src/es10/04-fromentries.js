/* -------------------------------------------------------------------------- */
/*                             Object.fromEntries                             */
/* -------------------------------------------------------------------------- */

//pasar de un array  a un objeto

const entries = new Map([['name','Rafael'],['lastname','Solano'],['age', 30]])

console.table(entries);
console.log(entries);

console.log(Object.fromEntries(entries));
console.table(entries);

