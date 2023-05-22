/* -------------------------------------------------------------------------- */
/*                                    async                                   */
/* -------------------------------------------------------------------------- */

async function* antherGenerathor(){
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
  

}

const other = antherGenerathor();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));

console.log('Hello');


async function arrayNames(arr){
  for await(let value of arr){
    console.log(value);
  }
}

const names = arrayNames( ['Rafael','Solano','Juan','Ana',]);

console.log("after/ despues");

