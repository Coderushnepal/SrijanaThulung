var container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

//HEADER
var header = document.createElement("h1");
header.classList.add("heading");
header.innerHTML = "Hangman";
container.appendChild(header);

var breakline = document.createElement("br");
header.appendChild(breakline);

//SUBHEADER
var subHeader = document.createElement("span");
subHeader.classList.add("sub-header");
subHeader.innerHTML = "Find the hidden word- Enter a letter";
header.appendChild(subHeader);

//WRONGwORDS
var wrongDiv = document.createElement("div");
wrongDiv.classList.add("wrong-div");
container.appendChild(wrongDiv);
var wrongWords = document.createElement("div");
wrongWords.classList.add("wrong");
wrongWords.innerHTML = "Wrong words";
wrongDiv.appendChild(wrongWords);

var breakline = document.createElement("br");
wrongWords.appendChild(breakline);
//DASHDIV
var dashDiv = document.createElement("div");
dashDiv.classList.add("dash-div");
container.appendChild(dashDiv);

//HINTS
var hint = document.createElement("h2");
hint.innerHTML = "Hint: types of fruits";
container.appendChild(hint);

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
console.log(fruitList);

for (var i = 0; i < fruitList.length; i++) {
  var letterDash = document.createElement("div");
  letterDash.classList.add("dashes");
  dashDiv.appendChild(letterDash);
}
var wrongLetters = [];
var wrongGuess = document.createElement("span");
wrongGuess.id = "wrong-letter";
wrongWords.appendChild(wrongGuess);

var dashBox = document.getElementsByClassName("dashes");

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (fruitList.includes(e.key)) {
    for (var j = 0; j < fruitList.length; j++) {
      if (fruitList[j] === e.key) {
        dashBox[j].innerHTML = e.key;
      }
    }
  } else {
    displayFigureParts();

    wrongGuess = document.getElementById("wrong-letter");
    // console.log(wrongGuess);
    if (!wrongLetters.includes(e.key)) {
      wrongLetters.push(e.key);
    }
    wrongGuess.innerHTML = wrongLetters.join(",");
    console.log(wrongLetters);
  }
});
