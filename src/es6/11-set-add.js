/* -------------------------------------------------------------------------- */
/*                                     SET       o conjunto                             */
/* -------------------------------------------------------------------------- */

/**
 * El objeto Set le permite almacenar valores únicos de cualquier tipo, ya sea valores primitivos o referencias a objetos.add, has,delete,size
 */

const list = new Set();

//agrega nuevos elemntos al final del conjunto no agrega elentos repetidos
list.add('item 1');
list.add('item 2').add('item 3');

const obj = { a: 1, b: 2 };
list.add(obj);

console.log(list);

// Retorna  un valor boolean idicando si el elemnto con el valor especificado existe en el conjunto o no
console.log(list.has('item 1'));

//size retorna el numero delementos unicos del  set
console.log(list.size);
console.log(list);

//Delete
//borra un elemento en especifico del set
console.log(list.delete('item 3'));
console.log(list);

list.forEach(element => {
  console.log(element);
});

//convertir de array a set

let arr = [1, 2, 3, 4, 4, 4, 4];
console.log(arr);

const myset1 = new Set(arr);
console.log(myset1);

//convertir del set en arrr

const myarr2 = Array.from(myset1);
console.log(myarr2);

arr = myarr2;
console.log(arr);
