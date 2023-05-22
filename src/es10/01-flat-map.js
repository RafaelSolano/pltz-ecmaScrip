/* -------------------------------------------------------------------------- */
/*                                  flat map                                  */
/* -------------------------------------------------------------------------- */
const arr = [1,2,3,4,5,6,[1,2,3,4,5,6,[1,2,3,4,5,6]]];

console.table(arr);
//* .flat retorna un  uevo array en una sola dimencion

console.table(arr.flat(3));

//flat map, mapea los arrays para aplanarlos
const arr2=[1,2,3,4,5,6];
console.table(arr2.flatMap(v => [v,v**2]));