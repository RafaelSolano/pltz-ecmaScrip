/* -------------------------------------------------------------------------- */
//*                             Objetos literales                             */
/* -------------------------------------------------------------------------- */

//^ Forma antigua

function newuser(name, lastName, age) {
  return {
    name: name,
    lastName: lastName,
    age: age,
  };
}
console.log(userNew("Rafael", "Solano", 34));
/* -------------------------------------------------------------------------- */


//^Forma nueva

/**
 * 
 * @param {*string} name 
 * @param {*string} lastName 
 * @param {*number} age 
 * @returns {*objeto persona }
 */
function userNew(name, lastName, age) {
  return {
    name,
    lastName,
    edad: age,
  };
}

console.log(userNew("Rafael", "Solano", 34));
