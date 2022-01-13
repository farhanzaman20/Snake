// Canvas Setup
cnv = document.getElementById("my-canvas")
ctx = cnv.getContext("2d")
cnv.width = 400
cnv.height = 400

if (localStorage.getItem('theme') == 'dark') {
  lightToDark()
}
createStartMenu()

// Game Variables
var score, dx, dy, amount
var gameSpeed = 80
var gameState = 'menu'
if (localStorage.getItem('highScore') == undefined) {
  localStorage.setItem('highScore', 0)
}
document.getElementById('highscore').innerHTML = localStorage.getItem('highScore')

// Start Game Function
function startGame() {
  // Game Variables
  dx = 10
  dy = 0
  score = 0
  document.getElementById('score').innerHTML = 0
  gameState = 'game'
  createSnake()
  if (gameSpeed == 100) {
    amount = 5
  } else if (gameSpeed == 80) {
    amount = 10
  } else if (gameSpeed == 60) {
    amount = 15
  } else if (gameSpeed == 40) {
    amount = 20
  }

  // Game Loop
  gameLoop()
}

function gameLoop() {
  if (gameOverCheck()) {
    gameOver()
    return
  }
  setTimeout(function () {
    background(backCol)
    moveSnake(0, 10)
    drawFood()
    drawSnake()
    gameLoop()
  }, gameSpeed)
}

document.addEventListener('keydown', function (event) {
  if (gameState == 'menu') {
    if (currentMenu == 'main') {
      mainMenu.nav(event)
    } else if (currentMenu == 'main2') {
      mainMenu2.nav(event)
    } else if (currentMenu == 'options') {
      optionsMenu.nav(event)
    } else if (currentMenu == 'mode') {
      modeMenu.nav(event)
    } else if (currentMenu == 'snake') {
      snakeMenu.nav(event)
    }
  } else if (gameState == 'game') {
    playerMove(event)
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
  console.log('Game Over')
  highScoreCheck()
  createPlayAgainMenu()
  gameState = 'menu'
}

function highScoreCheck() {
  console.log(score)
  if (localStorage.getItem('highScore') < score) {
    console.log('New high score')
    localStorage.setItem('highScore', score)
    document.getElementById('highscore').innerHTML = localStorage.getItem('highScore')
  }
}