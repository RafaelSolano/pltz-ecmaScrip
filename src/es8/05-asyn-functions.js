/* -------------------------------------------------------------------------- */
/*                               Async function                               */
/* -------------------------------------------------------------------------- */

//funcion asincrona con retraso de 4 segundos
function fnAsync() {
  return new Promise((resolve, reject) => {
      true
      ? setTimeout(() => resolve('AsynC'), 4000)
      : reject(new Error('Error!!'));
  });
}

//llamando al funcion asincrona //no es bloqueante
const anotherFunction = async () => {
  const algo = await fnAsync();
  console.log(algo);
  console.log('Hello!!');
};


console.log('Antes/Before');
anotherFunction();
console.log('Despues/After');

