// console.log("Hola mundo");

// let nombre = prompt("Cuál es tu nombre?");
// const span = document.querySelector("#welcome");

// if (nombre.length < 2) {
//   nombre = prompt("Demasiado corto, dinos, cuál es realmente tu nombre?");
// }

// span.textContent = "Hola, " + nombre.toUpperCase();

// FUNCIONES
// declarar la funcion
// function cantarCumple() {
//   console.log("Que los cumplas Feliz");
//   console.log("Que los cumplas Feliz");
//   console.log("Que los cumplas Feliz Oscar");
//   console.log("Que los cumplas Feliz");
// }

// llamar o invocar a la función
// cantarCumple()
// cantarCumple()
// cantarCumple()

// Parametros en las funciones
// function cantarCumple(nombre) {
//     console.log("Que los cumplas Feliz");
//     console.log("Que los cumplas Feliz");
//     console.log("Que los cumplas Feliz " + nombre);
//     console.log("Que los cumplas Feliz");
//   }

//   cantarCumple("Juliana")
//   cantarCumple("Marta")
//   cantarCumple("Carlos")

// function cuadrado(numero) {
//     console.log(numero * numero);
// }

// function fechaYHora() {
//     console.log("ahora es la fecha y hora " + Date());
// }

// Multiples parametros y parametro por default

// function saludar(nombre1, nombre2, nombre3 = "No dio su nombre") {
//     console.log("Hola bienvenido " + nombre1);
//     console.log("Hola bienvenido " + nombre2);
//     console.log("Hola bienvenido " + nombre3);
// }

// saludar("Juliana", "Jorge")

// function multiplicacion(numero1, numero2 = 1) {
//     console.log(numero1 * numero2);
// }

// Alcance de las variable

// function contarHasta(numeroLimite) {
//     let contador = 1;
//     while (contador <= numeroLimite) {
//     console.log("Es el numero " + contador);
//     contador++
//   }
// }

// Hoisting

// sumar(7,25)

// function sumar(numero1, numero2) {
//     console.log(numero1 + numero2);
// }

// let resta = function (numero1, numero2) {
//     console.log(numero1 - numero2);
// }

// resta(50,9)

// function sumar(numero1, numero2) {
//     console.log("Te voy a devolver algo");
//     console.log("ya pase el return");
//     console.log("ya pase el return");
//     console.log("ya pase el return");
//     console.log("ya pase el return");
//     return numero1 + numero2
// }

// Arrow Function

// function saludar() {
//     return "Hola como estas?"
// }

// let saludar = (nombre) => "Hola como estas?" + nombre

// swal("Muy buen trabajo!", "Hicimos todos los ejercicios", "warning");

// EJERCICIOS

// function triplicador(numero) {
//     return numero * 3
// }

// function multiplicador(numero1, numero2) {
//     return numero1 * numero2
// }

// function division(numero1, numero2) {
//     return numero1 / numero2
// }

// function resto(numero1, numero2) {
//     return numero1 % numero2
// }

// resto(division(multiplicador(triplicador(5),12), 12), 3)

const longitudDelNombre = (nombre = "") => nombre.length;

console.log(longitudDelNombre()); // 0
console.log(longitudDelNombre("Ana")); // 3
