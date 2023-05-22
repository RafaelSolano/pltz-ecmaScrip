/* -------------------------------------------------------------------------- */
//*                                  PROMESAS                                  */
/* -------------------------------------------------------------------------- */

//^ una forma de trabajar el asincronismo antes del asyn await

const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('si funciona');
    } else {
      reject('No funciona');
    }
  });
};

anotherFunction()
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });

const name1 = params => {
  return new Promise((resolve, reject) => {
    true ? 'hola' : 'Error';
  });
};

name1()
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });


  