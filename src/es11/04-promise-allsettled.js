/* -------------------------------------------------------------------------- */
/*                             Promise Allsettled                             */
/* -------------------------------------------------------------------------- */

const promise1 = new Promise ((resolve, reject)=>reject('Reject'));

const promise2 = new Promise((resolve, reject)=> resolve('Resolve'));

const promise3 = new Promise ((resolve, reject)=> resolve('Resolve 2'));


//Retorna el estado de todas las promesas
Promise.allSettled([promise1,promise2, promise3]).then(response =>console.log(response));