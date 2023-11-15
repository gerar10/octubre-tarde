console.log("Hola mundo");

// OBJETOS

// let persona = {
//     nombre: "Juan",
//     edad: 25,
//     ciudad: "buenos aires",
//     hermanos: ["Maria", "Carlos"],
//     saludar: (nombre) => {
//         console.log("hola " + nombre + " como estas?");
//     },
//     active: true
// }

// Acceder a un valor de un objeto
// Dot notation y Bracket notation
//dot
// persona.ciudad
//bracket
// persona["hermanos"]

// let propiedad = "hermanos"

// MODIFICAR OBJETOS
// dot
// persona.nombre = "Carlos"
// bracket
// persona["ciudad"] = "Cordoba"

// Agregamos propiedades al objeto
// dot
//persona.pais = "Argentina"
// bracket
// persona["trabajo"] = "Bombero"

// Objeto dentro de objetos

// let auto = {
//     marca: "Tesla",
//     modelo: "Model Y",
//     kilometros: 0,
//     nuevo: true,
//     arrancar: function () {
//       alert("el auto se enciende!");
//     },
//     partes: [
//       { nombre: "bateria", estado: "nuevo" },
//       { nombre: "motor", estado: "nuevo" },
//     ],
//   };

//   let autos = [
//     {
//       marca: "Citroen",
//       modelo: "C3",
//       año: 2013,
//       dueño: "Juan",
//       color: {
//         capot: "gris",
//         puertas: "negro",
//       },
//       dueñosAnteriores: [], // Lo compro 0KM
//     },
//     {
//       marca: "Honda",
//       modelo: "Fit",
//       año: 2016,
//       dueño: "Santiago",
//       color: {
//         capot: "rojo",
//         puertas: "rojo",
//       },
//       dueñosAnteriores: ["Jorge", "Iván"],
//     },
//   ];

// autos[0].color.capot = "Negro"
// autos[0].dueño = autos[1].dueño
// autos[0].dueñosAnteriores.push("Juan")

// RECORRER UN OBJETO
// let nuevaHeroina = {
//     nombreAvenger: 'capitana marvel',
//     nombreHumano: 'carol danvers',
//     poder: 'ser archi fuerte y volar por el espacio',
//     edad: 28,
//     ciudad: "Buenoas Aires"
// }

// for(let variable in nuevaHeroina) {
//     console.log(nuevaHeroina[variable]);
//     console.log(variable);
// }

let estudiante = {
  nombre: "Marcelo",
  edad: 30,
  materias: ["matematicas", "Sociales", "historia"],
  promedio: 8,
  escuela: "modelo",
  ciudad: "Neuquen",
};

// for(let propiedad in estudiante) {
//     console.log(`${propiedad}: ${estudiante[propiedad]} esta es una linea`);
//     console.log(propiedad +": " + estudiante[propiedad] + "esta es una linea");
// }

// EJERCICIOS
// 2)

let miAuto = {};

miAuto.marca = "Ferrari";

miAuto["año"] = 2018;

miAuto.nuevo = false;

let propertyKey = "modelo";
miAuto[propertyKey] = "f-500";

let anotherPropertyKey = "precio";
miAuto[anotherPropertyKey] = 200000;

let nextProperty = "color";
miAuto[nextProperty] = "rojo";

// for(let propiedad in miAuto) {
//     console.log(`${propiedad}: ${miAuto[propiedad]}`);
//     console.log(propiedad + ": " + miAuto[propiedad]);
// }

// MIVEL 2 Aumentar la nota

let lista = [
  { Estudiante: "Juan", nota: 6 },
  { Estudiante: "Mario", nota: 8 },
  { Estudiante: "Julia", nota: 10 },
  { Estudiante: "Sofia", nota: 9 },
];

for (let i = 0; i < lista.length; i++) {
  if (lista[i].nota > 5 && lista[i].nota <= 8) {
    lista[i].nota += 2;
  } else if (lista[i].nota === 9) {
    lista[i].nota++;
  }
}
