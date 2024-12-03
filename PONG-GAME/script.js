// Variabler for spillet
const gameContainer = document.querySelector('.game-container');
const paddle1 = document.getElementById('paddle1');
const paddle2 = document.getElementById('paddle2');
const ball = document.getElementById('ball');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
const winnerMessage = document.getElementById('winner-message'); // Vinnermelding

// Spillvariabler
let ballX = 390, ballY = 240, ballSpeedX = 4, ballSpeedY = 3; // Økt ballhastighet
let paddle1Y = 200, paddle2Y = 200;
let scorePlayer1 = 0, scorePlayer2 = 0;
const paddleHeight = 100;
const gameWidth = 800, gameHeight = 500;
const ballSize = 20;
let isPaused = false; // Variabel for å håndtere pause

// Bevegelse av padlene
document.addEventListener('keydown', (e) => {
    // Pause funksjon (P-tast)
    if (e.key === 'p' || e.key === 'P') {
        togglePause();
    }

    // Hvis spillet er i pausemodus, gjør ingenting
    if (isPaused) return;

    // Bevegelse av padlene
    if (e.key === 'w' && paddle1Y > 0) paddle1Y -= 30;
    if (e.key === 's' && paddle1Y < gameHeight - paddleHeight) paddle1Y += 30;
    if (e.key === 'ArrowUp' && paddle2Y > 0) paddle2Y -= 30;
    if (e.key === 'ArrowDown' && paddle2Y < gameHeight - paddleHeight) paddle2Y += 30;
});

// Oppdatering av padler og ball
function updateGame() {
    // Hvis spillet er i pausemodus, stopp oppdatering
    if (isPaused) return;

    // Oppdater padler
    paddle1.style.top = `${paddle1Y}px`;
    paddle2.style.top = `${paddle2Y}px`;

    // Beveg ballen
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Kollisjon med vegger
    if (ballY <= 0 || ballY >= gameHeight - ballSize) ballSpeedY = -ballSpeedY;

    // Kollisjon med padler
    if (ballX <= paddle1.offsetWidth && ballY >= paddle1Y && ballY <= paddle1Y + paddleHeight) ballSpeedX = -ballSpeedX;
    if (ballX >= gameWidth - paddle2.offsetWidth - ballSize && ballY >= paddle2Y && ballY <= paddle2Y + paddleHeight) ballSpeedX = -ballSpeedX;

    // Ballen går ut
    if (ballX <= 0) {
        scorePlayer2++;
        updateScore();
        pauseUntilKeyPress(); // Pause til spiller som slipper inn mål trykker på en bevegelsestast
        resetBall();
    } else if (ballX >= gameWidth - ballSize) {
        scorePlayer1++;
        updateScore();
        pauseUntilKeyPress(); // Pause til spiller som slipper inn mål trykker på en bevegelsestast
        resetBall();
    }

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
}