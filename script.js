let button = document.getElementById("btn");
let colorHexName = document.getElementById("hex-value");
let colorHex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f "];
let body = document.body.style;

function fuck() {
  let shit = "#";
  for (let i = 0; i < 6; i++) {
    shit += colorHex[Math.floor(Math.random() * colorHex.length)];
  }

  body.backgroundColor = shit;
  console.log(shit);
}

button.addEventListener("click", fuck);
