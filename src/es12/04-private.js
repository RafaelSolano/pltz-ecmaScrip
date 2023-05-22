
/* -------------------------------------------------------------------------- */
//*                              Metodos privados                              */
/* -------------------------------------------------------------------------- */

class User {
  
  //metodos
  greating() {
    return ' Hello';
  }
}

//instancia de la clase
const rasl = new User();
console.log(rasl.greating());

//instancia de la clase
const juan = new User();
console.log(juan.greating());

class User2 {
  //metodo constructor
  constructor() {
    console.log('Nueva instancia d enuevo usuario');
  }
  
  //metodo saludo
  greating() {
    return 'hello';
  }
}
const rasl2 = new User2();

///this hace referencia al elemnto padre que la contiene

class User3 {
  constructor(name) {
    this.name = name;
  }
  //metodos
  #speak() {
    return 'Hello';
  }
  greating() {
    return `${this.speak()} ${this.name}`;
  }
}
//Instancia de user 3
const ana = new User3('Ana');
console.log(ana.greating());

//getter y setters

class user4 {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  #speak() {
    return 'hello';
  }
  greating() {
    return `${this.speak()} ${this.name}`;
  }
  get #uAge() {
    return this.age;
  }
  set #uAge(age) {
    this.age = age;
  }
}


const rasl4 = new user4('Rafael', 31);
console.log(rasl4.uAge);
console.log(rasl4.uAge = 20);