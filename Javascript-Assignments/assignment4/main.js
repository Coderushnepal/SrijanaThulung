var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  var ball = document.createElement("div");
  var box = document.getElementById("box1");

  ball.style.height = "25px";
  ball.style.width = "25px";
  ball.style.backgroundColor = "red";
  ball.style.borderRadius = "50%";

  box.style.height = "300px";
  box.style.width = "300px";
  box.style.border = "2px solid black";
  box.style.position = "relative";

  ball.style.position = "absolute";
  ball.style.top = Math.random() * (box.clientHeight - 25) + "px";
  ball.style.left = Math.random() * (box.Width - 25) + "px";
  box.appendChild(ball);
});
