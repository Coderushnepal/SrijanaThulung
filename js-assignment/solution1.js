function generatePyramid(n) {
  for (let i = 5; i >= 1; i--) {
    var arr = [];
    for (let j = 1; j <= i; j++) {
      arr.push("*");
    }
    console.log(arr.join(""));
    console.log("\n");
  }
}
generatePyramid(5);
