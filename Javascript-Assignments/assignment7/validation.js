createForm.addEventListener("submit", (e) => {
  //  var messageElement.innerHTML = "";
  e.preventDefault();
  validateNameLabel();
  validateEmailLabel();
  validatePasswordLabel();
});
function validateNameLabel() {
  var messageElement = document.createElement("div");
  if (inputElement.value === "" || inputElement.value <= 3) {
    let message = "Username must be at least three character";
    messageElement.innerHTML = message;
    nameLabel.appendChild(messageElement);
  }
}
function validateEmailLabel() {
  var messageElement = document.createElement("div");
  let email = emailElement.value;
  var re = /\S+@\S+\.\S+/;
  let isEmailValid = re.test(email);

  if (isEmailValid === false) {
    let message = "Email is not valid";
    messageElement.innerHTML = message;
    emailLabel.appendChild(messageElement);
  }
}
function validatePasswordLabel() {
  var messageElement = document.createElement("div");
  if (psdElement.value.length <= 6 || psdElement.value.length == "") {
    let message = "password must be atleast 6 character";
    messageElement.innerHTML = message;
    psdLabel.appendChild(messageElement);
    oldPassword = psdElement.value;
  }
}
function validateConfirmPassword() {
  var messageElement = document.createElement("div");

  var matchPassword = confirmElement.value;
  if (oldPassword != matchPassword || matchPassword == "") {
    let message = "password2 is required";
    messageElement.innerHTML = message;
    confirmLabel.appendChild(messageElement);
  }
}
// deleteExistingValidations(){

// }
