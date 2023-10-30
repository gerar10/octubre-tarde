console.log("Hola mundo");

// Ejercicio 2
let num1 = Number(prompt("Asignale valor"));
let num2 = parseInt(prompt("Dame otro valor"));
let respuesta = num1 + num2;

// console.log(resultado);

// nivel 3
// 1
let edadUsuario = parseInt(prompt("cual es tu edad"));
let edadMaxima = 85;
let snackFavorito = prompt("cual es tu snack favorito?");
let snackPorDia = parseInt(prompt("cuantos snacks comes por dia?"));
let resultado = (edadMaxima - edadUsuario) * 365 * snackPorDia;
let precioSnack = parseFloat(prompt("Decime el precio del snack en dolares"));
let gasto = resultado * precioSnack;
alert(
  "vas a comer " +
    resultado +
    " snacks por el resto de tu vida y vas a gastar " +
    gasto +
    " dolares"
);

// 2
let cantidadDiasViaje = parseInt(
  prompt("cuantos dias vas a estar de vacaciones?")
);
let presupuestoMaximo = parseInt(prompt("Cuanto presupuesto tenes?"));
let comidas = parseInt(prompt("cuantas comidas comes por dia?"));
let cantidadDeComidas = cantidadDiasViaje * comidas;
let disponibleComida = presupuestoMaximo / cantidadDeComidas;

alert(
  "Podés gastar " +
    disponibleComida +
    " en cada comida para que te alcance la plata durante los " +
    cantidadDiasViaje +
    " días de viaje"
);
