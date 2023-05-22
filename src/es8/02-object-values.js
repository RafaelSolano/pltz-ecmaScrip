/* -------------------------------------------------------------------------- */
/*                                Object values                               */
/* -------------------------------------------------------------------------- */

/**Retorna un array apartir del los valores de un objeto es decior combiete el objeto en arrays pero solo con los valores no con las llavesd
*/


const countries = {
  mx: 'mexico',
  col: 'colombia',
  es: 'españa',
  pe: 'peru',
  eu: 'United States',
};

console.log(Object.values(countries));

// creo un array apartir de los valores de el objeto
let arrCountries = Object.values(countries);

//recorro el array 
arrCountries.forEach(countrie => {
  console.log(countrie);
  
});