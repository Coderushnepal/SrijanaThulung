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

//for win result
var winResult = document.createElement("div");
winResult.id = "winBox";
container.appendChild(winResult);

var winValue = document.createElement("div");
winValue.classList.add("text");
winValue.innerHTML = "Congratulation,YOU WIN!";
winResult.appendChild(winValue);

//for loss result
var lossResult = document.createElement("div");
lossResult.id = "lossBox";
container.appendChild(lossResult);
var lossValue = document.createElement("div");
lossValue.classList.add("text");
lossValue.innerHTML = "SORRY,YOU LOST!!";
lossResult.appendChild(lossValue);
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
var correctlyGuessedLetters = [];
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

//toast-message
var toast = document.createElement("div");
toast.classList.add("message");
container.appendChild(toast);
var notification = document.createElement("h3");
notification.innerHTML = "Already guessed";

toast.appendChild(notification);

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (fruitList.includes(e.key)) {
    if (correctlyGuessedLetters.includes(e.key)) {
      // console.log("already guessed ", e.key);
      toast.style.display = "inline-block";
      setTimeout(() => {
        toast.style.display = "none";
      }, 1000);
    }
    for (var j = 0; j < fruitList.length; j++) {
      if (fruitList[j] === e.key) {
        correctlyGuessedLetters.push(e.key);
        dashBox[j].innerHTML = e.key;

        if (correctlyGuessedLetters.length === fruitList.length) {
          var winBox = this.getElementById("winBox");
          console.log("you win");
          winBox.style.display = "inline-block";
        }
      }
    }
  } else {
    displayFigureParts();

    wrongGuess = document.getElementById("wrong-letter");
    // console.log(wrongGuess);
    if (!wrongLetters.includes(e.key)) {
      wrongLetters.push(e.key);
    } else {
      toast.style.display = "inline-block";
      setTimeout(() => {
        toast.style.display = "none";
      }, 1000);
    }
    if (wrongLetters.length === 6) {
      console.log("you lose");
      var lossBox = this.getElementById("lossBox");
      lossBox.style.display = "inline-block";
    }
    wrongGuess.innerHTML = wrongLetters.join(",");
    console.log(wrongLetters);
  }
});
