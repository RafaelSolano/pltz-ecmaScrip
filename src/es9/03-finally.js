/* -------------------------------------------------------------------------- */
/*                           Finally en las promesas                          */
/* -------------------------------------------------------------------------- */

const antherFunction = () => {
  return new Promise((resolve, reject) => {
    true
    ?resolve('si')
    :reject('error')
    
  })
  
}

antherFunction()
  .then(response => console.log(response))
  .catch(err => console.log(err))
  .finally(()=> console.log('Finally'));