//funciones
function square(num) {
	return num * num;
}
console.log(square(2));

//funciones tipo flecha
const cube = (num) => {
	return num * num * num;
};
console.log(cube(3));

const perimetroSquare = (num) => num * 4;
console.log(perimetroSquare(4));

const suma = (num1, num2) => num1 + num2;
console.log(suma(2, 4));

const resta = (num1, num2) => {
	return num1 - num2;
};
console.log(resta(4, 2));

