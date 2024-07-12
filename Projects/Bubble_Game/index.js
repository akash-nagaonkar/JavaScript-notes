// Constants and Variables
let timer = 60;
let score = 0;
let randomHitNumber = 0;
let highestScore = 0;

// Hit value
const getNewHit = () => {
  randomHitNumber = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = randomHitNumber;
};

// Timer( 1 minute)
const runTimer = () => {
  const timerValue = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timerValue);

      if (highestScore < score) {
        document.querySelector("#pBtm").innerHTML = `
        <div class="gameO">
        <h1 class="gameOver">Game Over</h1>
        <h1 class="scoreVal">New Highest Score: ${score}</h1>

        <button class="playAgain">Play Again</button>
        </div>
        `;
      } else {
        document.querySelector("#pBtm").innerHTML = `
          <div class="gameO">
          <h1 class="gameOver">Game Over</h1>
          <h1 class="scoreVal">Your Score: ${score}</h1>
          <button class="playAgain">Play Again</button>
          </div>
          `;
      }

      updateHighestScore();

      // Play again button
      document.querySelector(".playAgain").addEventListener("click", () => {
        location.reload();
      });
    }
  }, 1000);
};

// Increasing score
const increaseScore = () => {
  score += 10;
  document.querySelector("#score").textContent = score;
};

// Bubbles with random values
const makeBubbles = () => {
  let bubbles = "";
  for (let i = 0; i <= 167; i++) {
    const random = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">
        ${random}
    </div>`;
  }
  document.querySelector("#pBtm").innerHTML = bubbles;
};

// Main game logic --> Event Bubbling
document.querySelector("#pBtm").addEventListener("click", (bubbleValue) => {
  const clickedNumber = Number(bubbleValue.target.textContent);
  if (clickedNumber === randomHitNumber) {
    increaseScore();
    makeBubbles();
    getNewHit();
  }
});

// Update highest score in local storage
const updateHighestScore = () => {
  if (score > parseInt(localStorage.getItem("highestScore") || 0)) {
    localStorage.setItem("highestScore", score);
    document.querySelector("#highScore").textContent = score;
  }
};

// Display highest score on page load
document.addEventListener("DOMContentLoaded", () => {
  highestScore = localStorage.getItem("highestScore") || 0;
  document.querySelector("#highScore").textContent = highestScore;
});

makeBubbles();
getNewHit();
runTimer();
