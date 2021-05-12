const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const randomColor = Math.trunc(Math.random() * 10) + 1;
  console.log(randomColor);
  if (randomColor === 1) {
    document.body.style.background = "blue";
  } else if (randomColor === 2) {
    document.body.style.background = "red";
  } else if (randomColor === 3) {
    document.body.style.background = "green";
  } else if (randomColor === 4) {
    document.body.style.background = "yellow";
  } else if (randomColor === 5) {
    document.body.style.background = "pink";
  } else if (randomColor === 6) {
    document.body.style.background = "black";
  } else if (randomColor === 7) {
    document.body.style.background = "silver";
  } else if (randomColor === 8) {
    document.body.style.background = "brown";
  } else if (randomColor === 9) {
    document.body.style.background = "purple";
  } else if (randomColor === 10) {
    document.body.style.background = "orange";
  }
});
