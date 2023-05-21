function newUser (name,age, country) {
//! forma vieja de pasar parametros por defecto 
  var name = name || 'Rafael';
  var age = age || 30;
  var country =country || 'COL'
  console.log(`${name} ${age} ${country}`)
}

newUser()// parametros por defecto
newUser('Juan', 23, 'ESP') // pasando parametros

// ^-------------------------------------------------------------------------- */

//^ Nueva forma de pasar parametros por defecto

function newAdmin (name = 'Antonio', age = 23, country = 'EU') {
  console.log(`${name} ${age} ${country}`)
}

newAdmin()// parametros por defecto
newAdmin('luis', 23, 'ESP') // pasando parametros
//^ -------------------------------------------------------------------------- */