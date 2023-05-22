/* -------------------------------------------------------------------------- */
/*                                 Promise Any                                */
/* -------------------------------------------------------------------------- */


const promise1 = new Promise ((resolve, reject)=>reject('Reject'));
const promise2 = new Promise((resolve, reject)=> resolve('Resolve1'));
const promise3 = new Promise ((resolve, reject)=> resolve('Resolve 2'));


//^ any nos regresa la primer promesa que se resuelva

Promise.any([promise1,promise2, promise3])
  .then(response =>console.log(response));