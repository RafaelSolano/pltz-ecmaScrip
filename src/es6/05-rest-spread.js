/* -------------------------------------------------------------------------- */
//*                   Destructuracion de objetos y de arrays                   */
/* -------------------------------------------------------------------------- */

//Arrays 
let fruits = ["Manzana", "Pera", "limon", "naranja"];

//^ Destructurar array
let [, a, b] = fruits;
console.log(a, b, fruits[3]);
console.log(a);

//& -------------------------------------------------------------------------- */

// Objeto
let user = {
  username: "Rafael",
  lastname: "Solano",
  age: 23,
};

//^ Destructurando un objeto
let { username, age} = user;
console.log(username, age);


/* -------------------------------------------------------------------------- */
//*                               SPREAD OPERATOR                              */
/* -------------------------------------------------------------------------- */

let person = { name: 'Rafael', age: 34};
let dir = { country: 'COL', state: 'BGA'};

let country = 'COL';

let data = {...person, country}
console.log(data);


data = {id: 1, ...person}
console.log(data);

//combinar dos objetos
function combinarObjetos (json1, json2) {
	let result= {...json1, ...json2}
	return result
}
console.log(combinarObjetos(person, dir));

//^ ---------------------------------- rest ---------------------------------- */
function sum (num, ...values) {
console.log(values);
console.log(num + values[0]);
return num + values[0];
}

sum(1,6);