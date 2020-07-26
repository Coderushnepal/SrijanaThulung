var x = document.getElementById("form-sample");
var createForm = document.createElement("form");
x.appendChild(createForm);

var heading = document.createElement("h1");
heading.innerHTML = "Register with us";
createForm.appendChild(heading);

var breakline = document.createElement("br");
createForm.appendChild(breakline);

//userName
var nameLabel = document.createElement("label");
nameLabel.innerHTML = "Username";
createForm.appendChild(nameLabel);

var breakline = document.createElement("br");
createForm.appendChild(breakline);

var inputElement = document.createElement("input");
inputElement.setAttribute("type", "text");
inputElement.setAttribute("id", "username");
inputElement.placeholder = "Enter username";
createForm.appendChild(inputElement);

var breakline = document.createElement("br");
createForm.appendChild(breakline);
var breakline = document.createElement("br");
createForm.appendChild(breakline);

//email
var emailLabel = document.createElement("label");
emailLabel.innerHTML = "Email";
createForm.appendChild(emailLabel);

var breakline = document.createElement("br");
createForm.appendChild(breakline);

var emailElement = document.createElement("input");
emailElement.setAttribute("id", "email");
emailElement.placeholder = "Enter email";
createForm.appendChild(emailElement);

var breakline = document.createElement("br");
createForm.appendChild(breakline);
var breakline = document.createElement("br");
createForm.appendChild(breakline);

//password
var psdLabel = document.createElement("label");
psdLabel.innerHTML = "Password";
createForm.appendChild(psdLabel);

var breakline = document.createElement("br");
createForm.appendChild(breakline);

var psdElement = document.createElement("input");
psdElement.setAttribute("type", "password");
psdElement.setAttribute("id", "password");
psdElement.placeholder = "Enter password";
createForm.appendChild(psdElement);

var breakline = document.createElement("br");
createForm.appendChild(breakline);
var breakline = document.createElement("br");
createForm.appendChild(breakline);

//confirm
var confirmLabel = document.createElement("label");
confirmLabel.innerHTML = " Confirm Password";
createForm.appendChild(confirmLabel);

var breakline = document.createElement("br");
createForm.appendChild(breakline);

var confirmElement = document.createElement("input");
confirmElement.setAttribute("type", "password");
confirmElement.setAttribute("id", "confirmpassword");
confirmElement.placeholder = "Enter password again";
createForm.appendChild(confirmElement);

var breakline = document.createElement("br");
createForm.appendChild(breakline);
var breakline = document.createElement("br");
createForm.appendChild(breakline);

//submit
var submitelement = document.createElement("input");
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("id", "submit");
submitelement.setAttribute("value", "Submit");
createForm.appendChild(submitelement);
