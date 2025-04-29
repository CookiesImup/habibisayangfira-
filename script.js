let score = 0;
const scoreDisplay = document.getElementById("score");
const popcat = document.getElementById("popcat");

popcat.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = "Score: " + score;
});
