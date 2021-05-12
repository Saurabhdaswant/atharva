const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const randomColor = Math.trunc(Math.random() * 10) + 1;
  console.log(randomColor);
  if (randomColor === 1) {
    document.body.style.background = "#780000";
  } else if (randomColor === 2) {
    document.body.style.background = "#ffff3f";
  } else if (randomColor === 3) {
    document.body.style.background = "#283618";
  } else if (randomColor === 4) {
    document.body.style.background = "#03045e";
  } else if (randomColor === 5) {
    document.body.style.background = "#52b788";
  } else if (randomColor === 6) {
    document.body.style.background = "#affc41";
  } else if (randomColor === 7) {
    document.body.style.background = "#c77dff";
  } else if (randomColor === 8) {
    document.body.style.background = "#161a1d";
  } else if (randomColor === 9) {
    document.body.style.background = "#89023e";
  } else if (randomColor === 10) {
    document.body.style.background = "#ffba08";
  }
});
