var btn = document.getElementById("btn");
var i = 0;
var direction = 1;

btn.addEventListener("click", function () {
  var ball = document.createElement("div");
  var box = document.getElementById("box1");

  ball.id = i;
  ball.style.height = "25px";
  ball.style.width = "25px";
  ball.style.backgroundColor = "red";
  ball.style.borderRadius = "50%";

  box.style.position = "absolute";

  ball.style.position = "absolute";
  ball.style.top = Math.random() * (box.clientHeight - 25) + "px";
  ball.style.left = Math.random() * (box.clientWidth - 25) + "px";

  ball.addEventListener("click", function (e) {
    //move continously
    setInterval(function () {
      var currentTop = ball.style.top;
      var newValue = parseInt(currentTop) + 10 * direction;
      ball.style.top = newValue + "px";

      var clientHeight = box.clientHeight;

      if (newValue >= clientHeight - 25 || newValue - 25 <= 0) {
        direction *= -1;
      }
    }, 1000 / 60);
  });
  box.appendChild(ball);
  i++;
});
