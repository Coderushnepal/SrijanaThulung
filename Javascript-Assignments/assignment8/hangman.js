var container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

var header = document.createElement("h1");
header.classList.add("heading");
header.innerHTML = "Hangman";
container.appendChild(header);

var breakline = document.createElement("br");
header.appendChild(breakline);

var subHeader = document.createElement("span");
subHeader.classList.add("sub-header");
subHeader.innerHTML = "Find the hidden word- Enter a letter";
header.appendChild(subHeader);

var dashDiv = document.createElement("div");
dashDiv.classList.add("dash-div");
container.appendChild(dashDiv);

var fruits = [
  "apple",
  "mango",
  "banana",
  "watermelon",
  "grapes",
  "pineapple",
  "guava",
];

var fruitList = fruits[Math.floor(Math.random() * fruits.length)];
// console.log(fruitList);

for (var i = 0; i < fruitList.length; i++) {
  var letterDash = document.createElement("div");
  letterDash.classList.add("dashes");
  dashDiv.appendChild(letterDash);
}

document.addEventListener("keydown", function (e) {});
