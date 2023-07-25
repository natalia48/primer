//condicionales ---sital condicion se cumple hacer algo
//no hago nada o hago otra cosa se usa if parentesisyllave

if (condicion) {
    //las acciones de la condicion se cumple
}

let cajaChica = 200;

if (cajaChica > 0) {
    console.log(`Hay $$(cajaChica) en la caja chica`);
}
else {
    console.log(`No hay ni un peso`);//else es sino que muestre estemen
}//no hace falta usar else solo se usa en caso que hagamos otracosa si
//la condicion no se cumple
// 

//otro ejercicio
//dado un numero que nos diga sies par o no es par
//dato de entrada es el numero de usuarioocliente 
//el proceso :dividir el numero en 2 y evaluo el resto
//dato de salida:es el mensaje al usuario este es el algoritmocomohago

let numeroUsuario = parseInt(prompt("ingrese un numero entero"));
//sie no es un numro
if (isNaN(numeroUsuario)) {
    console.warn(`el valor $(numeroUsuario)no es un numero`)
} else {
    let resto = numeroUsuario % 2//esto me devuelve el resto de dividiren2 porcentaje 2
    if (resto == 0) {//el let resto numerousuario %2 tambien sepuede poner enif
        console.log(`el numero $(numeroUsuario") es par `)
    }
}
console.log(`el numero $(numeroUsuario)no es par `)
if (resto == 0) {//el let resto numerousuario %2 tambien sepuede poner enif
    console.log(`el numero $(numeroUsuario") es par `)

    console.log(`el numero $(numeroUsuario)no es par`)
}

//condicion es el if pregunto si la condicion se cumple hacemos esto
//se ejecuta la sentencia sies verdadera sino se ejecuta lo que hay en else
//if es si y else es sino aparece cuando la condiciones false o es menor
//o igual o mayor o igual oigual y asi
//el isnan es mandar un valor numerico si no es un numero me muestra 
// UN MENSAJE NO ES UN NUMERO ,ES UNA VALIDACION
//ES UN PARSINT ES PARA UN ENTERO WARNI ES ADVERTENCIA SALE DE COLOR AMARILLO
//LO DETERMINAMOS EN LA CONSOLA CON WARNI CONSOLO.WARN ES PARA EL MENSAJE
//PARA EL DESARROLLADOR
//CONDICIONALES DE IF ANIDADOS

let monto = parseFloat(prompt(`ingrese el monto de la venta`));
let montoDescuento = 0 //le asigno un valor porq sino sale indefinido

let montoConDescuento = 0

// if (isNaN(monto)) {
//     console.warn(`el valor ingresado no es valido`);
// } else if (monto < 500) {
//     console.log(`este monto no tiene descuento`);
// } else if (monto <= 500 && monto >= 1000) {
//     console.log(`el monto tiene un descuento del 5%`);
//     montoDescuento = 0.05;
//     montoConDescuento = monto - montoDescuento;
//     console.log(`el monto a pagar con el descuento
//     incluido es $$(montoConDescuento)`);
// } else if (monto < 1000 && monto >= 7000) {
//     console.log("el monto tiene un descuento del 11%");
//     montoDescuento = 0.11;
//     montoConDescuento = monto - montoDescuento;
//     console.log(`el monto a pagar con el descuento
//     incluido es $$(montoConDescuento)`);
// } else if (monto < 7000 && monto >= 15000) {
//     console.log("el monto tiene un descuento del 11%");
//     montoDescuento = 0.18;
//     montoConDescuento = monto - montoDescuento;
//     console.log(`el monto a pagar con el descuento
//     incluido es $$(montoConDescuento)`)
// } else {
//     console.log("el monto tiene un descuento del 25%");
//     montoDescuento = 0.25;
//     montoConDescuento = monto - montoDescuento;
//     console.log(`el monto a pagar con el descuento
//     incluido es $$(montoConDescuento)`)
// }

//si este if es falso pasa a otra linea es verdadero si el monto no es un numero
//el codigo se lee enjs sincromatico se ejecuta linea por linea

//refactorear el codigo osea lo mejoramos el de arriba
if (isNaN(monto)) {
    console.warn(`el valor ingresado no es valido`);
} else if (monto < 500) {
    console.log(`este monto no tiene descuento`);
} else if (monto <= 1000) {
    console.log(`el monto tiene un descuento del 5%`);
    montoDescuento = 0.05;

} else if (monto <= 7000) {
    console.log("el monto tiene un descuento del 11%");
    montoDescuento = 0.11;

} else if (monto <= 15000) {
    console.log("el monto tiene un descuento del 11%");
    montoDescuento = 0.18;

} else {
    console.log("el monto tiene un descuento del 25%");
    montoDescuento = 0.25;
    montoConDescuento = monto - montoDescuento;
    console.log(`el monto a pagar con el descuento
             incluido es $$(montoConDescuento)`);
}


let edad = 15;
let tutor = falso;
if (edad >= 18) {
    console.log(`entra a la fiesta`)
} else {
    console.warn(`no entra`)
}
//CONDICIONALES MULTIPLES SE LLAMA SWITCH ESTRUCTURA
//en switchen key entre parentesis vala variable
switch (key) {
    case value:
        //acciones el caso case son las opciones
        break; //dice q si se cumple ahi termina si no lo pongo ejecutaria todo esto corta 
    case value:
        //acciones esta se aplica si la otra opcion no es
        break;

    default://es algo q se cumple por defecto cuando nose cumple nada
        break;
}
// new Date().getDay()el domingo es 0lunes1 y asi sucesivo de 0 a 6
// new Date().getFullYear()
let dia = new Date().getDay();
switch (dia) {
    case 0:
        console.log(`hoy es domingo`)
        break;
    case 1:
        console.log(`hoy es miercoles`)
        break;
    //ponemos asi todos los dias
    default:
        console.log(`hoy es sabado`)//esto lo uso sino pongo
        //como ejemplo arriba en case el dia 6 q es sabado 
        //llega hasta el 5 viernes a veces se usa default
        break;

}
/*
En un restaurante los clientes pueden pedir 
menú de carne, pescado o verdura. 
Si pide carne se le ofrecerá como bebida vino tinto, 
si pide pescado se le ofrecerá vino blanco 
y si pide verdura se le ofrecerá agua

Si no elije el menú de la lista aparecerá
 la frase elija carne, pescado o verdura.
*///salto de linea se hace asi\n
//cuando agrego comillas simples es un string y funciona
let menuSeleccionado = prompt(`ingrese un menu para
recibir opcion bebida\n 1:carne, 2:pescado, 3:verdura`);
switch (menuSeleccionado) {
    case `1`:
        console.log(`ofrecemos buen vino`)
        break;
    case `2`:
        console.log(`le ofrecemos vino blanco`)
        break;
    case `3`:
        console.log(`ofrecemos agua mineral`)
        break;
    //ponemos asi todos los dias
    default:
        console.log(`elija su bebida y menu`)
        break;
}
//un comerciante hace descuento a sus clientes de sgte
//forma:-si ha comprado menos de 100 euros no hay descuento
//si la compra esta por encima de 300 hasta 500 euros te
//descuenta un 10% y si la compra supera los 500 le descuenta
//un 15%
//para hacer este ejercicio jakeamos al switch ponemos
//un valor BULEANO TRUE Y LE DECIMOS Q SE EJECUTE asi jakeamos y funciona el swicht como yo quiero
//lo valide dentro de cada caso Y PUSE QUE VENTA SEA FLOTANTE
//Y ASI ACTUA TRUE Y SWITCH
let venta = parseFloat(prompt(`ingrese el monto de la venta`));
switch (true) {
    case venta`<100`:
        console.log(`no descuento`)
        break;
    case venta`<=300`:
        console.log(`descuento del 5%`)
        break;
    case venta`<=500`:
        console.log(`descuento 10%`)
        break;
    case venta`>500`:
        console.log(`descuento 15%`)
    default:
        console.error(`el dato es erroneo`)
        break;
}

//switch anidado podemos poner un if adentro porejemplo if(venta==500)
//segun el caso o dentro de if un switch no hay problem

//EN UNA SALA DE JUEGOS EXISTE ARCADE,CONSOLAS Y ROT
//REALIDAD VIRTUAL .SI UN USUARIO PAGA 4 CREDITOS PUEDE ACCEDER
// ATODAS N SI PAGA 3 SOLO PODRA ACCDER A AS 3 PRIMERAS Y SI PAGA
//2 A LAS DOS PRIMERAS Y SI PAGA 1 SOLO LA PRIMERA SOLA

