//maht metodo objeto maht

let decimal = "54.4444444444";
// redondear numeros con maht
console.Log(Math.floor(decimal));//redondea para  abajo el numero
console.Log(Math.ceil(decimal));//redondea para arriba el numero 
console.Log(Math.round(decimal));//redondea el numero dependiendo
//  delvalor despuesde la coma
//NUMERO MAXIMO
console.Log(Math.max(35, 3.3, 800));
//NUMERO MINIMO
console.Log(Math.min(35, 3.3, 800));
//convertir anumero entero con parseint
let numero = "45.4444";
let numeroEntero = parseInt(numeroString);

//convertir a numero flotante(decimal)
let numeroFlotante = parseFloat(numeroString);
//NUMEROS CON DOS DECIMALES CON 2 FORMAS 
console.Log(Math.round(numeroFlotante * 100) / 100);
let flotante = parseFloat(numeroFlotante.toFixed(2));
//elevar un numero a una potencia
let numeroBase = numeroEntero;
let exponente = 3;
console.Log(Math.pow(numeroBase, exponente));//ahora calcular raiz cuadrada
console.log(Math.sqrt(flotante));//con sqrt es obtener la raiz cuadrada del/
//decimal de arriba
//valores random 1 a 10
//el nath.ceil es para obtener valor randon redondea para arriba
Math.ceil(Math.random() * 10);//esto no sirve por es del 0 al cercaono 1


//para hacer interaccion con el usuario
//en la console pongo prompt("ingrese un numero")

//programa que reciba dos numeros y los multiplique entre si

let num1 = prompt("ingrese el primer numero");
let num2 = prompt("ingrese el segundo numero");
let numerosMultiplicados = num1 * num2;
console.log(el valor de multiplicar $(num1) con $(num2) es $(numerosMultiplicados));
console.log($(num1) * $(num2) = $(numerosMultiplicados));
document.write(hola mundo);

Math.random()