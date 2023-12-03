// Hacer front del Login
const objectToSend = {};

function getInputValues() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => (objectToSend[input.id] = input.value));
}
const redirect = () => {
    window.location.href = `../../`
}

const loginUser = async (e) => {
  e.preventDefault();
  getInputValues()
  try {
    const response = await axios.post("../../login", objectToSend);
    console.log(response);
    redirect()
  } catch (error) {
    console.log(error.message);
  }
};

const button = document.querySelector("#login")
button.addEventListener("click", (e) => loginUser(e))
