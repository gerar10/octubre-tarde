console.log("Hola Mundo");

// EJERCICIO CLASE 06 
// let nombreUsuario = prompt("¿Cuál es tu nombre?")
// let edadUsuario = Number(prompt("¿Cual es tu edad?"))

// alert(`Hola ${nombreUsuario} de ${edadUsuario} años, te interesaria adquirir tickets? 🎟️`)

// EJERCICIO CLASE 07

// let nombreUsuario = prompt("¿Cual es tu nombre?").toUpperCase()

// let span = document.querySelector("#welcome")

// if (nombreUsuario.length < 2) {
//     alert("el nombre debe tener al menos 2 caracteres")
//     nombreUsuario = prompt("Por favor ingresa tu nombre correctamente")
// }

// span.textContent = `Hola bienvenido ${nombreUsuario}`


// EJERCICIO CLASE 08
// let nombreUsuario = prompt("¿Cual es tu nombre?")
// let span = document.querySelector("#welcome")

// while (nombreUsuario.length < 3 ) {
//     nombreUsuario = prompt("tu nombre debe tener al menos 3 letras")
// }

// span.textContent = `Hola bienvenido ${nombreUsuario}`


// EJERCICIO CLASE 09   

function getTickets(ticket, ciudad) {
    if (ticket) {
        swal("Felicitaciones", "compraste tickets" , "success");
    } else {
        swal("Lo lamento", "no hay tickets", "info");
    }
}

// es una arrow function 
// const getTickets = (ticket, ciudad) => {
//     if (ticket) {
//         swal(`Felicitaciones compraste los tickets para el concierto en la ciudad de ${ciudad}`);
//     } else {
//         swal(`Lo lamento ya no hay tickets para el concierto en la ciudad de ${ciudad}`);
//     }
// }

// EJERCICIO CLASE 10
// let edadUsuario = Number(prompt("¿Cual es tu edad"))
// let botones = document.querySelectorAll("button")

// // accion que se realiza si el usuario es menor

// if (edadUsuario < 18) {
//     swal("Lo lamento", "al ser menor de edad, no podes comprar tickes", "info");
//     for (let i = 0; i < botones.length; i++) {
//         botones[i].setAttribute("disabled", "disabled")
//         botones[i].style.backgroundColor = "gray"
//         botones[i].style.cursor = "default"
//     }
// }



// EJERCICIOS CLASE 11

// let tickets = {
//     BuenosAires: 0,
//     Cordoba: 1,
//     Mendoza: 100,
//     Jujuy: 80,
//     SanPablo: 12,
//   };
  
//   function getTickets(place) {
//    disableSoldOutButtons(tickets);
//     if (tickets[place] > 0) {
//       swal("Sold!", `You have tickets to the ${place} concert`, "success");
//       tickets[place]--
//       if (tickets[place] == 0) {
//         disableSoldOutButtons(place);
//       }
//     } else {
//       swal(
//         "Oh no!",
//         `You are outta luck!, there are no more tickets for ${place}`,
//         "info"
//       );
//     }
//   }
  
//   function disableSoldOutButtons(tickets) {
//     for (const ciudad in tickets) {
//       if (tickets[ciudad] == 0) {
//         let boton = document.querySelector(`#${ciudad}`);
//         boton.textContent = "Sold Out";
//       }
//     }
//   }





