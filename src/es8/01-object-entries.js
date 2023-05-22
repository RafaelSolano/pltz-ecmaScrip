/* -------------------------------------------------------------------------- */
/*                               Object entries                               */
/* -------------------------------------------------------------------------- */
/**sive para convertir los objetos en arrays */

const countries = {
  mx: 'mexico',
  col: 'colombia',
  es: 'españa',
  pe: 'peru',
  eu: 'United States',
};

console.log(countries);
console.log(typeof countries);
console.log(countries['mx']);


//conviertiendo el objeto en un arreglo de arreglos
console.log(Object.entries(countries));
console.log(typeof countries);

Object.entries(countries).forEach(element => {
  console.log(element);
});
