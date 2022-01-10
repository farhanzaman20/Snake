// Common Elements
const htmlMain = document.querySelector('main');
const difficultyOpt = document.querySelector('#difficulty');

// Canvas Setup
cnv = document.getElementById("my-canvas");
ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

createStartMenu();

// Game Variables
var score, dx, dy, gameSpeed, amount;
var gameState = 'menu';
document.getElementById('highscore').innerHTML = localStorage.getItem('highScore');

// Start Game Function
function startGame() {
  // Game Variables
  dx = 10;
  dy = 0;
  score = 0;
  document.getElementById('score').innerHTML = 0;
  gameState = 'game';
  createSnake();
  gameSpeed = difficultyOpt.value;
  if (gameSpeed == 100) {
    amount = 5;
  } else if (gameSpeed == 80) {
    amount = 10;
  } else if (gameSpeed == 60) {
    amount = 15;
  } else if (gameSpeed == 40) {
    amount = 20;
  }

  // Game Loop
  gameLoop();
}

function gameLoop() {
  if (gameOverCheck()) {
    gameOver();
    return;
  };
  setTimeout(function () {
    background('white');
    moveSnake(0, 10);
    drawFood();
    drawSnake();
    gameLoop();
  }, gameSpeed);
}

document.addEventListener('keydown', function (event) {
  if (gameState == 'menu') {
    mainMenu.nav(event);
    mainMenu.select(event)
  } else if (gameState == 'game') {
    playerMove(event);
  }
})

function gameOverCheck() {
  for (let i = 4; i < snake.length; i++) {
    if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
      return true
    }
  }

  if (snake[0].x < 0 || snake[0].x > 390 || snake[0].y < 0 || snake[0].y > 390) {
    return true
  }
}

function gameOver() {
  console.log('Game Over');
  htmlMain.innerHTML = '<p>Game Over<br>Press any button to play again</p>';
  document.addEventListener('keydown', mainKeydownHandler);

  highScoreCheck();
}

function highScoreCheck() {
  console.log(score);
  if (localStorage.getItem('highScore') < score) {
    console.log('New high score');
    localStorage.setItem('highScore', score);
    document.getElementById('highscore').innerHTML = localStorage.getItem('highScore');
  }
}