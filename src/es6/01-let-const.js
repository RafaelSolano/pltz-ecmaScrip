//^ Variables re-declaradas y re-asignadas

// La re-declaración es volver a declarar una variable, y la re-asignación es volver a asignar un valor. Entonces cada palabra reservada tiene una forma diferente de manejar variables:
// Una variable declarada con var puede ser re-declarada y re-asignada.
// Una variable declarada con let puede ser re-asignada, pero no re-declarada.
// Una variable declarada con const no puede ser re-declarada, ni re-asignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.

//^ Declarar y asignar  variables
//^ var
var lastName = "David";
console.log("lastName:", lastName);

//^ reasignar variable var
lastName = "oscar";
console.log("lastName:", lastName);

//^ Declarar y asignar  variables
//^ let
let fruit = "Apple";
console.log("fruit", fruit);

//^ reasignar variable let
fruit = "kiwi";
console.log("fruit:", fruit);

//^ Declarar y asignar  variables
//^ const
const animal = "Dog";
//^ No se puede reasignar variable
//! animal = 'Cat';
console.log("animal:", animal);

const fruits = () => {
	if (true) {
		var fruit1 = "Apple";
		let fruit2 = "Kiwi"; //Falla por el scope local de la
		var fruit3 = "Banana";
	}
	console.log(fruit1);
	console.log(fruit2);
	console.log(fruit3);
};

fruits();
