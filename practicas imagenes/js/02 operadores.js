// operadores en javascript-
// aritmeticos
let numero1 = 22
let numero2 = 45.45

console.log(numero1 + numero2);

console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);
console.log(numero1 % numero2); //es el resto de las operaciones anteriores
//unitarios es cuando a un valor le agrego o le quito uno
numero1++ //esto es igual q escribir numero1 = numero1+1 es uno en uno
//va incrementando de uno en uno
++numero1; //creo un pequeño script q es un contador 
--numero1;
numero1--;

//relacionales
console.log(numero1 == numero2);//el doble igual es para compararlo nos da valores bulianos verdaderos o falsos
//app.js:18 18 significa q esta en la linea 18 la consolo.log
console.log(numero1 > numero2);
console.log(numero1 < numero2);
console.log(numero1 >= numero2);//me daria falso si es menor
console.log(numero1 <= numero2);
console.log(numero1 != numero2);//distinto es contrario a == ni mayor ni menor 
//solo si es distinto con != se usa mucho
//NEGACION
let verdadero = true
console.log(!verdadero);// esto es preguntar es verdadero
// el signo de admiracion yo niego los cambios niego loverdadero
//hay valores falsos para java el 0 el null en condiciones tambien indefinido string vacio
//una palabra  mumero o true son verdaderos 

//logicos
let estudia = true
let practica = false//nos devuelve un valor v of y nos permite comparar
//por ejemplo  operador and es de y por ejemplo pablo y matias compra hambur
console.log(estudio && practico);//and compara sies true ambas variable son true
console.log(estudio || practico);//or a este le interesa q algunos de los dos sea verdadero
//o uno o el otro sea verdadero nada mas --and los dos sonv solo cuandolas dos lo sean
//siesmenor y viene acompañadoes true
//sies menor y no viene acompañdo el falso
//si es mayor o viene acompañodo es verdaeero
//Tarea
// Crear dos variables de tipo number
let num1 = 2
let num2 = 1854

// mostrar por consola los resultados de las siguientes operaciones:
// Sumar las dos variables
console.log(num1 + num2)
// Restar las dos variables
console.log(num1 - num2)
// Multiplicar las dos variables
console.log(num1 * num2)
// Dividir ambas variables
console.log(num1 / num2)
// comparar si la primera variable es mayor o igual que la segunda
console.log(num1 >= num2)
// Comparar si la primera variable es distinta de la segunda
console.log(num1 != num2)
