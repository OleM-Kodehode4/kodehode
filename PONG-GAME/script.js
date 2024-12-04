const gameContainer = document.querySelector(".gameArea");
const paddle1 = document.getElementById("paddle1");
const paddle2 = document.getElementById("paddle2");
const ball = document.getElementById("ball");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const winnerMessage = document.getElementById("winner-message");

let ballX = 390,
  ballY = 240,
  ballSpeedX = 4,
  ballSpeedY = 3;
let paddle1Y = 200,
  paddle2Y = 200;
let scorePlayer1 = 0,
  scorePlayer2 = 0;
const paddleHeight = 100;
const gameWidth = 800,
  gameHeight = 500;
const ballSize = 20;
const paddleSpeed = 10;
let isPaused = false;
const keyPressed = [];

document.addEventListener("keydown", (e) => {
  keyPressed[e.key] = true;
});

document.addEventListener("keyup", (e) => {
  keyPressed[e.key] = false;
});

function move() {
  if (keyPressed["w"] && paddle1Y > 0) {
    paddle1Y -= paddleSpeed;
  }
  if (keyPressed["s"] && paddle1Y < gameHeight - paddleHeight) {
    paddle1Y += paddleSpeed;
  }

  if (keyPressed["ArrowUp"] && paddle2Y > 0) {
    paddle2Y -= paddleSpeed;
  }
  if (keyPressed["ArrowDown"] && paddle2Y < gameHeight - paddleHeight) {
    paddle2Y += paddleSpeed;
  }

  paddle1.style.top = `${paddle1Y}px`;
  paddle2.style.top = `${paddle2Y}px`;
}

function updateGame() {
  if (isPaused) return;

  move();

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballY <= 0 || ballY >= gameHeight - ballSize) ballSpeedY = -ballSpeedY;

  if (
    ballX <= paddle1.offsetWidth &&
    ballY >= paddle1Y &&
    ballY <= paddle1Y + paddleHeight
  )
    ballSpeedX = -ballSpeedX;
  if (
    ballX >= gameWidth - paddle2.offsetWidth - ballSize &&
    ballY >= paddle2Y &&
    ballY <= paddle2Y + paddleHeight
  )
    ballSpeedX = -ballSpeedX;

  if (ballX <= 0) {
    scorePlayer2++;
    updateScore();
    pauseUntilKeyPress();
    resetBall();
  } else if (ballX >= gameWidth - ballSize) {
    scorePlayer1++;
    updateScore();
    pauseUntilKeyPress();
    resetBall();
  }

  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;

  requestAnimationFrame(updateGame);
}

function updateScore() {
  score1.textContent = scorePlayer1;
  score2.textContent = scorePlayer2;

  if (scorePlayer1 === 5) showWinner("Spiller 1 vant!");
  if (scorePlayer2 === 5) showWinner("Spiller 2 vant!");
}

function showWinner(message) {
  winnerMessage.textContent = message;
  winnerMessage.style.display = "block";
  isPaused = true;
  setTimeout(resetGame, 2000);
}

function resetBall() {
  ballX = gameWidth / 2 - ballSize / 2;
  ballY = gameHeight / 2 - ballSize / 2;
  ballSpeedX = -ballSpeedX;
  ballSpeedY = 3;
}

function resetGame() {
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  updateScore();
  winnerMessage.style.display = "none";
  resetBall();
  isPaused = false;
}

function togglePause() {
  isPaused = !isPaused;
  if (isPaused) {
    winnerMessage.textContent = "Spillet er pausert!";
    winnerMessage.style.display = "block";
  } else {
    winnerMessage.style.display = "none";
  }
}

function pauseUntilKeyPress() {
  isPaused = false;
  winnerMessage.textContent = "";

  const resumeGame = function (e) {
    if ((e.key === "w" || e.key === "s") && ballX <= 0) {
      isPaused = true;
      winnerMessage.style.display = "none";
      document.removeEventListener("keydown", resumeGame);
    } else if (
      (e.key === "ArrowUp" || e.key === "ArrowDown") &&
      ballX >= gameWidth - ballSize
    ) {
      isPaused = true;
      winnerMessage.style.display = "none";
      document.removeEventListener("keydown", resumeGame);
    }
  };

  document.addEventListener("keydown", resumeGame);
}

requestAnimationFrame(updateGame);
