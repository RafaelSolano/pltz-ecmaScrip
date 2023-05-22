/* -------------------------------------------------------------------------- */
//*                                  try / catch                                 */
/* -------------------------------------------------------------------------- */

//Forma clasica de hacerlo
try {
  hello();
} catch (error) {
  console.log(error);
}

//Forma nueva de hacerlo personalizado
//optional catch binding
try {
  anotehrfn();
} catch {
  console.log('Esto es un error');
}

console.log('after error');