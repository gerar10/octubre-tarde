// console.log("hola mundo");

// let edad = prompt("como es tu edad?")

// if (edad < 18) {
//     console.log("vos sos menor de edad");
// }

// WHILE LOOPS

// let clientes = 20

// while (clientes > 0) {
//     console.log("Aca tiene su ticket usted es el clientes numero " + clientes);
//     clientes = clientes - 1
// }

// console.log("ya terminamos de atender a todos los clientes");

// let pasajero = 1

// while (pasajero <= 10) {
//     console.log("Puede pasar su asiento es el numero: " + pasajero);
//     pasajero ++
// }

// ++ agrega una unidad
// -- resta una unidad
// += agrega segun la cantidad indicada
// -= resta segun la cantidad indicada

// let contador = 100

// while (contador > 0) {
//     console.log(contador);
//     contador --
// }

// While con string

// let palabraSecreta = "mate"
// let intentoUsuario = prompt("Cual es la palabra secreta?")

// while (intentoUsuario != palabraSecreta) {
//     alert("la palabra secreta es incorrecta")
//     intentoUsuario = prompt("volve a intentar por favor")
// }

// alert("bienvenido!!!")

// Variables acumuladoras
// let i = 1
// let final = 5
// let acumulador = 0

// while (i <= final) {
//     acumulador += i
//     console.log(acumulador);
//     i++
// }

// while loops anidados
// let i = 1;
// let j = 1;
// let final = 5;

// while (i <= final) {
//   j = 1;
//   while (j <= final) {
//     console.log(i + "-" + j);
//     j++;
//   }
//   i++;
// }

// Otro ejemplo con minutero

// let minutos = 10 
// let minutero = 1
// let segundos = 60
// let segundero = 1

// while (minutero <= minutos) {
//     while (segundero < segundos) {
//         console.log(minutero + " minutos:" + segundero + " segundos");
//         segundero ++
//     }
//     segundero = 0
//     minutero ++
// }

// Objeto Math
// Math.E  numero E
// Math.pow(3,2) potencia
// Math.random() nos devuelve un numero aleatorio entre el 0 y el 1 
// Math.floor(5.99) nos redondea hacia abajo => 5
// Math.ceil(5.01)  nos redondea hacia arriba => 6
// Math.round(5,23) redondeo normal

// Ejercicios

// let numero = -10

// while (numero <= 19) {
//     console.log(numero);
//     numero ++
// }

// let numero = 10 
// let final = 40

// while (numero <= final) {
//     console.log("el numero es " + numero);
//     numero +=2
// }

// let numero = 300 
// let final = 333

// while (numero <= final ) {
//     if(numero % 2 == 0) {
//         console.log("el numero impar es:" + numero);
//     }
//     numero ++
// }

let numero = 5 
let final = 50

while ( numero <= final ) {
    if (numero % 3 === 0 && numero%5 === 0) {
        console.log("el numero " + numero + " es divisible por 3 y por 5" );
    }
    numero ++
}