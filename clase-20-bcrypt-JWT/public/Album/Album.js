import { logOut } from "../utils/utils.js";

// const titleAlbum = document.querySelector("#titleAlbum");
// const descriptionAlbum = document.querySelector("#descriptionAlbum");
// const ul = document.querySelector(".playlist");
// const editAlbum = document.querySelector("#editAlbum");
// const addSongs = document.querySelector("#addSongs");
// const buttonLogout = document.querySelector("#logOut");

// const query = window.location.search.split("=");
// const idAlbum = query[1];

// const redirect = (id, url) => {
//   window.location.href = `${url}?album=${id}`;
// };

// const divTitleDesccription = document.querySelector(".descripcion");
// let numCancion = 1;

// function renderAlbum(album) {
//   // creamos los elementos HTML
//   const h1 = document.createElement("h1");
//   const h2 = document.createElement("h2");

//   // agregamos los estilos
//   h1.classList.add("title");
//   h2.classList.add("description");

//   // agregamos la info del album
//   h1.textContent = album.titulo;
//   h2.textContent = album.descripcion;

//   // los agregamos al HTML
//   divTitleDesccription.appendChild(h1);
//   divTitleDesccription.appendChild(h2);

//   // agregamos los addEventListener a los botones de la sidebar
//   editAlbum.addEventListener("click", () => {
//     redirect(album._id, "../EditAlbum/EditAlbum.html");
//   });
//   addSongs.addEventListener("click", () => {
//     redirect(album._id, `../AddSong/AddSong.html`);
//   });
// }

// function renderSongs(album) {
//   // creamos los elementos HTML
//   const li = document.createElement("li");
//   const spanSongNumber = document.createElement("span");
//   const spanSongTitle = document.createElement("span");
//   const spanSongDuration = document.createElement("span");
//   const spanSongIcon = document.createElement("span");
//   const iconTrash = document.createElement("i");
//   const iconMusic = document.createElement("i");

//   // agregamos los estilos
//   spanSongNumber.classList.add("song-number");
//   spanSongTitle.classList.add("song-title");
//   spanSongDuration.classList.add("song-duration");
//   spanSongIcon.classList.add("song-icons");
//   iconTrash.classList.add("fas");
//   iconTrash.classList.add("fa-trash-alt");
//   iconTrash.setAttribute("id", "delete");
//   iconMusic.classList.add("fas");
//   iconMusic.classList.add("fa-music");

//   // agregamos la info de las canciones
//   spanSongNumber.textContent = `${numCancion}-`;
//   spanSongTitle.textContent = album.titulo;
//   spanSongDuration.textContent = album.duracion;
//   numCancion++;

//   // agregamos los elementos al HTML
//   li.appendChild(spanSongNumber);
//   li.appendChild(spanSongTitle);
//   li.appendChild(spanSongDuration);
//   spanSongIcon.appendChild(iconTrash);
//   spanSongIcon.appendChild(iconMusic);
//   li.appendChild(spanSongIcon);
//   ul.appendChild(li);

//   // agregamos el addEventListener
//   iconMusic.addEventListener("click", () => {
//     window.open(album.link, "_blank");
//   });
// }

// // Hacemos el pedido a la base de datos para traernos los albums
// const getAlbum = async () => {
//   try {
//     const response = await axios.get(`../../../album/${idAlbum}`);
//     renderAlbum(response.data);
//     const canciones = response.data.canciones;
//     canciones.map((cancion, index) => {
//       renderSongs(cancion, index);
//     });
//     const trash = document.querySelectorAll("#delete");
//     for (let i = 0; i < trash.length; i++) {
//       trash[i].addEventListener("click", () => {
//         deleteSong(idAlbum, canciones[i]._id);
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// getAlbum();

// // Craamos funcion para eliminar una canción y le agregamos el addEventListener al icono del tachito
// const deleteSong = async (album, cancion) => {
//   try {
//     await axios.put(`../../../song/delete/${album}?idSong=${cancion}`);
//     await swal({
//       title: "Canción eliminada correctamente",
//       icon: "success",
//     });
//     ul.innerHTML = ""; // limpia la lista actual
//     const response = await axios.get(`../../../album/${idAlbum}`);
//     const canciones = response.data.canciones;
//     canciones.map((cancion, index) => {
//       renderSongs(cancion, index);
//     });
//     const trash = document.querySelectorAll("#delete");
//     for (let i = 0; i < trash.length; i++) {
//       trash[i].addEventListener("click", () => {
//         deleteSong(idAlbum, canciones[i]._id);
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// // como ya tenemos importada la funcion de logOut, al boton de logout le agregamos un evento click para que la ejecute
// buttonLogout.addEventListener("click", () => {
//   logOut();
//   window.location.href = `../Login/index.html`;
// });


// const username = document.querySelector("#welcome");

// const onLoad = async () => {
//   try {
//     const response = await axios.get("../../../../me");
//     username.textContent = `${response.data.nombre} ${response.data.apellido}`
//   } catch (error) {
//     console.log(error);
//     window.location.href = "../Login/index.html";
//   }
// };

// onLoad()


const query = window.location.search.split("=")
const idAlbum = query[1]


const renderAlbum = () => {
  // crear los elementos 
  const li = document.createElement("li")
  

  // agregar los estilos
  li.classList.add("song-number")

  //agregar atributos 


  // mostrar 
  

}


const getAlbum = async () => {
  try {
    const response = await axios.get(`../../album/${idAlbum}`)
    console.log("esta es el album", response);


  } catch (error) {
    console.log(error);
  }
}

getAlbum()

