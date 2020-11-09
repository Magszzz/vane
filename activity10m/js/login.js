const clear = document.querySelector("#clear");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

clear.addEventListener("click", () => {
  email.value = "";
  password.value = "";
});
