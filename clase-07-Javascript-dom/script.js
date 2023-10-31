console.log("Hola mundo");

// CONDICIONALES
// IF
// let edad = 25

// if (false) {
//     alert("Sos menor de edad")
// }

// console.log("pase de largo el if");

// IF ... ELSE
// let edad = 30;

// if (edad < 18) {
//   alert("Sos menor de edad");
// } else {
//   alert("Sos mayor de edad");
// }

// OPERADORES LOGICOS 
// < menor
// > mayor
// <= menor igual
// >= mayor igual
// == igualacion blanda
// === igualacion estricta


// let edad = "18";

// if (edad === 18) {
//   alert("Si el numero es igual a 18");
// } else {
//   alert("No es igual a 18");
// }

// Valores falsy 
// 0 
// null
// undefined 
// false
// ""


// if (usuario) {
//     alert("por favor completar tu nombre")
// }

// Operadores de comparacion y de negacion 
// || or => si alguno de los dos da true el resulta final es true
// && and == va a dar true si los dos son true
// != desigualdad blanda 
// !== desigualdad estricta


// let procedencia = prompt("¿de que pais venis?").toLowerCase()
// let edad = prompt("que edad tenes?")

// if (procedencia == "brasil" && edad > 18) {
//     alert("hablas portugués y sos mayor de edad")
// } else {
//     alert("No hablas portugués y/o no sos mayor de edad")
// }

// let palabraSecreta = "casa"
// let palabraUsuario = prompt("Adivina la palabra secreta")

// if (palabraSecreta !== palabraUsuario) {
//     alert("No adiviniastes la palabra secreta")
// } else {
//     alert("Adivnastes la palabra secreta!!!")
// }

// OPERADOR TERNARIO 
// let edad = 20

// if (edad > 18) {
//     alert("sos mayor de edad")
// } else {
//     alert("sos menor de edad")
// }

// edad > 18 ? alert("sos mayor de edad"): alert("sos menor de edad");

// if (true) {
//     console.log("siempre lo voy a ejecutar");
// }

// if (false) {
//     console.log("nunca lo voy a ejecutar");
// }

// let respuestaUsuario = prompt("¿Como te sentis hoy?")

// if ( respuestaUsuario === "triste" ) {
//     alert("arriba ese animo messi gano el 8vo balon")
// }

// let numeroSecreto = 8
// let numeroUsuario = parseInt(prompt("cual es el numero secreto"))

// if (numeroSecreto != numeroUsuario) {
//     alert("estas equivocado ese no es el numero secreto")
// }

let passwordCorrecto= "casa"

let password = prompt("decime la contraseña")

if (password === passwordCorrecto) {
    window.location = "http://www.infobae.com"
}






