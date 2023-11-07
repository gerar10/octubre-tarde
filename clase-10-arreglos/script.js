console.log("Hola mundo!!");

// ARREGLOS

// es una lista ordenada
// Indice // Posición
let lista = [
  "rojo",
  "verde",
  "azul",
  6,
  12,
  5,
  true,
  false,
  undefined,
  null,
  4.15,
  function name() {},
  "Gol",
];

lista[13] = "Escritorio";

// Métodos de arreglos
// push() y pop()

// push => nos va a permitir agregar un elemento en la ultima posicion
lista.push("Monitor");

// pop => elimina el ultimo elemento del arreglo
lista.pop();
lista.pop();

// unshift y el shift
// unshift nos permite agregar un elemento al principio del arreglo
lista.unshift("Violeta");

// shift nos permite eliminar el primer elemento del arreglo
lista.shift();

// indexOf
// Nos da el indice de un elemento que esta en el arreglo y que pasamos como argumento

// let nombres = ["carlos", "juan", "Matias", "Eduardo", "lorena", "Carla"];

// Filter
let notas = [1, 2, 3, 4, 10, 7, 6, 4, 8];

let aprobadas = notas.filter((nota) => {
  return nota >= 6;
});

// Slice
// nos permite clonar un arreglo
let notas2 = notas.slice();

// Splice, nos permite eliminar elementos de una arreglo. Indicamos el indice donde comieza y la cantidad de elementos
notas2.splice(2, 5);

// Join - Split
// transforma un arreglo en string
// let nombres = ["carlos", "juan", "Matias", "Eduardo", "lorena", "Carla"];

// transforma un string en un arreglo
let texto = "vamos a trabajar con el split y arreglos";

// for loop

let nombres = ["carlos", "juan", "Matias", "Eduardo", "lorena", "Carla"];

let numeros = [2, 4, 8, 6, 4, 9, 12];

for (let i = 0; i <= nombres.length; i++) {
  console.log(nombres[i]);
}

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i] * 3 );
// }

// nombres.forEach((nombre) => {
//     console.log(nombre);
// })

let titulos = document.querySelectorAll("h2");

for (let i = 0; i < titulos.length; i++) {
  titulos[i].style.backgroundColor = "green";
  titulos[i].textContent = "Estamos iterando los elementos de las etiquetas H2";
}
