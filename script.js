const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const randomColor = Math.trunc(Math.random() * 10) + 1;
  console.log(randomColor);
});
