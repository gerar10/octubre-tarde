const buttonAdd = document.querySelector(".add-button");

// Generamos una funcion para guardar los valores que ingresa el usuario
function getInputValues() {
  // Obtener los input del form
  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");
  const imageInput = document.getElementById("image");
  const anioLanzamientoInput = document.getElementById("anioLanzamiento");

  // Obtener los valores de los campos de entrada
  const titleValue = titleInput.value;
  const descriptionValue = descriptionInput.value;
  const imageValue = imageInput.value;
  const anioLanzamientoValue = anioLanzamientoInput.value;

  // Devolver los valores en un objeto
  return {
    titulo: titleValue,
    descripcion: descriptionValue,
    portada: imageValue,
    anioLanzamiento: anioLanzamientoValue,
  };
}

const addAlbum = async (e) => {
  e.preventDefault();
  const objectToSend = getInputValues();
  try {
    let album = await axios.post(`../../../album/agregar`, objectToSend);
    await swal({
      title: "Album agregado correctamente!",
      text: `Album: ${album.data.titulo}`,
      icon: "success",
      button: "Continuar",
    });
    window.location.href = "../";
  } catch (error) {
    swal({
      title: "No se pudo agregar el album, intentelo nuevamente",
      icon: "warning",
      text: "Todos los campos deben ser completados",
    });
  }
};

buttonAdd.addEventListener("click", (e) => {
  addAlbum(e);
});

const username = document.querySelector("p");

const onLoad = async () => {
  try {
    const response = await axios.get("../../../../me");
    username.textContent = `${response.data.nombre} ${response.data.apellido}`
  } catch (error) {
    window.location.href = "../Login/index.html";
  }
};

onLoad()
