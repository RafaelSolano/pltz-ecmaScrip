let user_name = 'Rafael'
let last_name = 'Solano'
let email = 'Rafael@gmail.com'
let pharse =  user_name + ' ' + last_name + ' ' +email;
console.log(pharse);

//^ Template literals
let template_literals = `
${user_name} ${last_name}${email}`
console.log(template_literals);

//^ multilinea Strings

let lorem = 'Esto es un string \n' +'Esto es otra linea'
console.log(lorem);