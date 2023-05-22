
/* -------------------------------------------------------------------------- */
/*                                 global this                                */
/* -------------------------------------------------------------------------- */

/**globalThis hace referencia al objeto global, sin importar el contexto en el que se encuentre tu código. Esto cambia dependiendo el entorno en el que se esté ejecutando el código, pues en node. js , el objeto global es global , en web workers es self y en el navegador es window . */

//del lado del navegador console.log(window);
console.log(global); //del lado de node
//web worker console.log(self);
console.log('-------------Globalthis----------');
console.log(globalThis);