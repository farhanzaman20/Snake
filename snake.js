// Snake Object
var snakeHeadCol = ['darkgrey', 'black']
var snakeCol = ['lightgrey', 'grey']

var snake
function createSnake() {
  snake = [
    { x: 200, y: 200 },
    { x: 190, y: 200 },
    { x: 180, y: 200 },
    { x: 170, y: 200 },
    { x: 160, y: 200 }
  ]
}

function drawSnakePart(snakePart) {
  fill(snakeCol[0])
  stroke(snakeCol[1])
  rect(snakePart.x, snakePart.y, 10, 10, 'fill')
  rect(snakePart.x, snakePart.y, 10, 10, 'stroke')
}

function drawSnake() {
  for (let i = 1; i < snake.length; i++) {
    drawSnakePart(snake[i])
  }
  fill(snakeHeadCol[0])
  stroke(snakeHeadCol[1])
  rect(snake[0].x, snake[0].y, 10, 10, 'fill')
  rect(snake[0].x, snake[0].y, 10, 10, 'stroke')
}

function moveSnake() {
  let head = { x: snake[0].x + dx, y: snake[0].y + dy }
  snake.unshift(head)

  if (snake[0].x == food.x && snake[0].y == food.y) {
    score += amount
    document.getElementById('score').innerHTML = score
    generateFood()
  } else {
    snake.pop()
  }
}

// Food
let food = {
  x: randomInt(0, 40) * 10, 
  y: randomInt(0, 40) * 10 
}

function generateFood() {
  food.x = randomInt(0, 40) * 10, 
  food.y = randomInt(0, 40) * 10 
}

function drawFood() {
  fill('pink')
  stroke('red')
  circle(food.x + 5, food.y + 5, 5, 'fill')
  circle(food.x + 5, food.y + 5, 5, 'stroke')
}

function playerMove (event) {
  if (event.key == 'ArrowLeft' && dx == !10) {
    dx = -10
    dy = 0
  } else if (event.key == 'ArrowUp' && dy == !10) {
    dy = -10
    dx = 0
  } else if (event.key == 'ArrowRight' && dx == !-10) {
    dx = 10
    dy = 0
  } else if (event.key == 'ArrowDown' && dy == !-10) {
    dy = 10
    dx = 0
  }
}