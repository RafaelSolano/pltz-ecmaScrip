/* -------------------------------------------------------------------------- */
//*                                 nullish.js                                 */
/* -------------------------------------------------------------------------- */
//Si el valor esta null o vacio le agrega otro valor

const number = null;

//si number es null lo valida y le asigna  el otro valor
const validate = number ?? 5;
console.log(validate);