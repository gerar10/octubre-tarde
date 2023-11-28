// CLASE 06

// let nombreUsuario = prompt("¿Cual es tu nombre?")
// let edadUsuario = prompt("¿Cual es tu edad?")

// alert(`Hola ${nombreUsuario} de ${edadUsuario}, te interesaria adquirir tickest? 🎟️`)

// CLASE 07
// let nombre = prompt('Cuál es tu nombre?')
// const span = document.querySelector('#welcome')

// if(nombre.length < 2){
//     nombre = prompt('Demasiado corto, dinos, cuál es realmente tu nombre?')
// }

// span.textContent=`Hola, ${nombre}`

// CLASE 08

// let nombre = prompt("Cuál es tu nombre?").toUpperCase();

// while (nombre.length < 3) {
//   nombre = prompt(
//     "Mmmm, tu nombre no puede ser tan corto, ingresa al menos 3 letras"
//   ).toUpperCase();
// }

// const span = document.getElementById("welcome");
// span.textContent = `Hola, ${nombre}`;
// const i = document.querySelector("i");
// i.setAttribute("class", "fa fa-ticket");

// CLASE 09

// function getTickets(place, Tickets) {
//   Tickets
//     ? swal("Sold!", `You have tickets to the ${place} concert`, "success")
//     : swal(
//         "Oh no!",
//         `You are outta luck!, there are no more tickets for ${place}`,
//         "info"
//       );
// }

// EJEMPLO SIN OPERADOR TERNARIO

// function getTickets(place, noTickets) {
//   if (noTickets) {
//     swal(
//       "Oh no!",
//       `You are outta luck!, there are no more tickets for ${place}`,
//       "info"
//     );
//   } else {
//     swal("Sold!", `You have tickets to the ${place} concert`, "success");
//   }
// }

// CLASE 10
// preguntamos la edad
// let edadUsuario = parseInt(prompt("¿Cual es tu edad?"));
// seleccionamos los botones
// let botones = document.querySelectorAll("button");

// accion que realiza si el usuario es menor ( usuario < 18)
// if (edadUsuario < 18) {
//   swal(
//     "Advertencia",
//     "Al ser menor de edad no vas a poder comprar Tickets",
//     "warning"
//   );
//   for (let i = 0; i < botones.length; i++) {
//     botones[i].setAttribute("disabled", "disabled");
//     botones[i].style.backgroundColor = "gray";
//     botones[i].style.cursor = "default";
//   }
// }

// CLASE 11

// let tickets = {
//   BuenosAires: 0,
//   Cordoba: 1,
//   Mendoza: 100,
//   Jujuy: 80,
//   SanPablo: 12,
// };

// function getTickets(place) {
//  disableSoldOutButtons(tickets);
//   if (tickets[place] > 0) {
//     swal("Sold!", `You have tickets to the ${place} concert`, "success");
//     tickets[place]--
//     if (tickets[place] == 0) {
//       disableSoldOutButtons(place);
//     }
//   } else {
//     swal(
//       "Oh no!",
//       `You are outta luck!, there are no more tickets for ${place}`,
//       "info"
//     );
//   }
// }

// function disableSoldOutButtons(tickets) {
//   for (const ciudad in tickets) {
//     if (tickets[ciudad] == 0) {
//       let boton = document.querySelector(`#${ciudad}`);
//       boton.textContent = "Sold Out";
//     }
//   }
// }

// function disableSoldOutButtons(place) {
//   let boton = document.querySelector(`#${place}`);
//   boton.textContent = " Sold Out";
// }

const username = document.querySelector("#welcome");

const onLoad = async () => {
  try {
    const response = await axios.get("../../../../me");
    username.textContent = `Hola ${response.data.nombre} ${response.data.apellido}, estas son las fechas disponibles para tu banda`;
  } catch (error) {
    window.location.href = "../Login/index.html";
  }
};

onLoad();
