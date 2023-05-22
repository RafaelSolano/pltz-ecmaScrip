/* -------------------------------------------------------------------------- */
//*                                   BigInt                                   */
/* -------------------------------------------------------------------------- */

//La función BIGINT devuelve una representación de entero grande de un número o una representación de serie de un número. Puede almacenar o cargar valores enteros grandes en tablas de DB2 y manipular los datos de distintas formas.

//antes se agragaba la n al final para decir que es un BigInt
const abBigNumber = 99999948938493847687348737987n;

//ahora  se puede crear con la funcion BigInt();
const anotherBigIntNumber= BigInt(99999948938493847687348737987)

console.log(abBigNumber);
console.log(anotherBigIntNumber);
