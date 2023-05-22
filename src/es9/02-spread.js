/* -------------------------------------------------------------------------- */
/*                        SPREAD OPERATOR   CON OBJETOS                       */
/* -------------------------------------------------------------------------- */

const user = {userName:'Rafae', lastName: 'Solano', age: 34 }
const {userName, ...values} = user

console.log(userName);
console.table(values);