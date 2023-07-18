

//string son datos cadenas de textos y de caracteres
let nombre = "eugenio"
let apellido = "FERNANDEZ"
let frase = "bienvenidos a la clase"
//concatenacionS
console.log(nombre + "daniel" + apellido);//las comillas es para agregar un string
//como por ejemplo daniel
console.log(nombre, "", apellido);//otra forma de concatenar con comas
//template string otra forma de concatenar es una plantilla
console.log(`Mi nombre es ${nombre} ${apellido}`);//control+altgr+llave son bastic
//metodos son programas que quiero q suceda porej colocar nombres completos en mayusculas
console.log(nombre.toUpperCase());//si tiene el parentesis al final es metodo
//es para poner en mayuscula java tiene en cuenta mayus y minus para comparar
console.log(apellido.toLocaleLowerCase());//metodo para poner en minuscula
//metodos sin informacion que tienen eso string tienen prop.cuantos
//caracteres tiene ese apellido
//METODOS Y PROPIEDADES QUIERO CARACTERES DE APELLIDO Y ELIMNAR ESPACIOS
//DELANTE Y DETRAS
console.log("el apellido tiene" + apellido.length() + "caracteres");
console.log(frase.trim().length());
//creo variable 
let frasesinespacio = frase.trim();//este metodo .trim elimina espacio
//delant4e y detras
//si hay espacio en el medio eliminamos tambien usar 2metodos
console.log(frasesinespacio.split(""));//con este metodo separa cada frase
//en comillas 
//si quiero quita espacio blanco enelmedio
let sinespacio = frasesinespacio.split("o");//y aca si pongo o por ej mesepara
//las frases en donde esta la letra o y toma el caracter como separar y lo corta
console.log(sinespaio.join("-"));//aca entre comillas pongo como quiero q
//se vea la frase con guion medio o en blanco-este join agrupa
//OBTENER UNA O VARIAS LETRAS POR EJ LA PRIMERA
console.log(apellido.charAt(0));
console.log(apellido.charAt(-1
));//si pongo en negativo es la ultima letra
//para sustraer la letra 
console.log(apellido.substring(1, 4));//en un string una letra esta en
//posicion 0 la segunda en el  1 la tercera 2--si pongo 3 es nandez de fernandez
//el sustring puedo ponerle dos valores elprimero es un entero entre
//0 hsta el -1 0al8 y el segundo valor le resta al valor -1
//fernandez es ern es del 1 hasta el 4 saca el primero y considera el4

//tarea1
//ingreso el apellido
let apellido = "roger"
//calcular cantidad de caracteres
console.log(apellido.toUpperCase());
//obtener la ultima letra del apellido
console.log(apellido.charAt(-1));
//tarea 2
// dada la sigte palabra marmota
console.log(marmota.toUpperCase())
// pasarla a mayuscula
//capitalizar la palabra (marmota)significa capitalizar que la primera letra este en mayuscula 
console.log(marmota.toUpperCase(0);)



