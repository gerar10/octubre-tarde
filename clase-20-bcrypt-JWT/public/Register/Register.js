const buttonRegister = document.querySelector("#buttonRegister");

// Generamos una funcion para guardar los valores que ingresa el usuario
function getInputValues() {
  // Obtener los input del form
  const nombreInput = document.getElementById("nombre"); // document.querySelector("#nombre")
  const apellidoInput = document.getElementById("apellido");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  // Obtener los valores de los campos de entrada
  const nombreValue = nombreInput.value;
  const apellidoValue = apellidoInput.value;
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  // Devolver los valores en un objeto
  return {
    nombre: nombreValue,
    apellido: apellidoValue,
    email: emailValue,
    password: passwordValue,
  };
}

// esta funcion hace lo mismo que la de arriba
// const objectToSend = {};
// function getInputValues() {
//   const inputs = document.querySelectorAll("input");
//   inputs.forEach((input) => (objectToSend[input.id] = input.value));
// }

const userRegister = async (e) => {
  e.preventDefault();
  const objectToSend = getInputValues();
  try {
    await axios.post("../../../createuser", objectToSend);
    window.location.href = `../../Login/index.html`;
  } catch (error) {
    console.log(error);
  }
};

buttonRegister.addEventListener("click", (e) => {
  userRegister(e);
});


