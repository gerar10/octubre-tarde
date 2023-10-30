console.log("Hola mundo y hola a todos");

// Valores en Javascript
// Valores primitivos
123456; // numeros
("palabras casa edificio"); // string, hay que ponerle comillas dobles o simples
// true false // booleanos
undefined;
null;
// Symbols y BigInits

// Objetos y funciones

// PROPIEDADES Y METODOS DE LOS STRINGS
let palabra = "Hoy comenzamos con Javascript";
let palabra2 = "Vamos a realizar muchos ejercicios";

// Cuenta la cantidad de caracteres
palabra.length;

// Acceder a un caracter en particular []
palabra[5];
palabra2[10];

// .toLowerCase() lo convierte a minusculas
palabra.toLowerCase();

// .toUpperCase() lo convierte en mayuscula
palabra.toUpperCase();

// concat() te junta los strings
palabra.concat(palabra2);

// .includes() nos devuelve true o false si encuentra lo que le pasamos entre parentesis
palabra.includes("g");

// Metodos numeros
// Number
// convierte a numero (si es moneda u otro simbolo te devuelve un NaN)
// Number("5") => 5

//parseInt
// te convierte a numeros enteros, y corta cuando encuentra otro caracter que no es un numero
// parseInt("78.45481818") => 78
// parseInt("45$") => 45

//parseFloat
// te convierte a numero, inclusive si es decimal
// parseFloat("78.454864161") => 78.454864161

// VARIABLES
// var variable = "casa // no la vamos a usar
let casa = "edificio";
const casa2 = "escritorio";

// Built-in Method
// alert()

// alert("Te damos la bienvenida")
let edadDeUsuario = parseInt(prompt("¿Cual es tu edad"));
