/* -------------------------------------------------------------------------- */
/*                                  GENERATOR                                 */
/* -------------------------------------------------------------------------- */

function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['Rafael', 'Antonio', 'Londo', 'Ana']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);