// Creamos una funcion para tomar los valores del form (los input que haga el usuario)
function getInputValues() {
  // Obtener los input del form
  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");
  const imageInput = document.getElementById("image");

  // Obtener los valores de los campos de entrada
  const titleValue = titleInput.value;
  const descriptionValue = descriptionInput.value;
  const imageValue = imageInput.value;

  // Devolver los valores en un objeto
  return {
    titulo: titleValue,
    descripcion: descriptionValue,
    portada: imageValue,
  };
}

const query = window.location.search.split("=");
const idAlbum = query[1];

// const form = document.querySelector("form")
const buttonEdit = document.querySelector(".edit-button");

buttonEdit.addEventListener("click", (e) => {
  changeAlbum(e);
});

const changeAlbum = async (e) => {
  e.preventDefault();
  const objectToSend = getInputValues();
  try {
    let album = await axios.put(`../../../album/${idAlbum}`, objectToSend);
    await swal({
      title: "Album editado correctamente!",
      text: `Album: ${album.data.titulo}`,
      icon: "success",
      button: "Continuar",
    });
    window.location.href = `../../index.html`;
  } catch (error) {
    console.log(error);
  }
};


const username = document.querySelector("#welcome");

const onLoad = async () => {
  try {
    const response = await axios.get("../../../../me");
    username.textContent = `${response.data.nombre} ${response.data.apellido}`
  } catch (error) {
    console.log(error);
    window.location.href = "../Login/index.html";
  }
};

onLoad()
