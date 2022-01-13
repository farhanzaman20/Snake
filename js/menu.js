// Start Menu
var mainMenu = {
  selected: 'start',

  nav: function(event) {
    if (event.key == 'ArrowDown' && this.selected == 'start') {
      this.draw(textCol[0], textCol[1])
      this.selected = 'options'
    } else if (event.key == 'ArrowUp' && this.selected == 'options') {
      this.draw(textCol[1], textCol[0])
      this.selected = 'start'
    } else if (event.key == 'Enter') {
      if (this.selected == 'start') {
        startGame()
      } else if (this.selected == 'options') {
        currentMenu = 'options'
        optionsMenu.selected = 'mode'
        optionsMenu.draw(textCol[1], textCol[0], textCol[0], textCol[0], textCol[0])
      }
    }
  },

  draw: function(col1, col2) {
    background(backCol)
    ctx.textAlign = "center"
    font('20px Arial')
    fill(col1)
    text('Start Game', 200, 175, 200, 'fill')
    fill(col2)
    text('Game Options', 200, 225, 200, 'fill')
  }
}

var mainMenu2 = {
  selected: 'start',

  nav: function(event) {
    if (event.key == 'ArrowDown' && this.selected == 'start') {
      this.draw(textCol[0], textCol[1])
      this.selected = 'options'
    } else if (event.key == 'ArrowUp' && this.selected == 'options') {
      this.draw(textCol[1], textCol[0])
      this.selected = 'start'
    } else if (event.key == 'Enter') {
      if (this.selected == 'start') {
        startGame()
      } else if (this.selected == 'options') {
        currentMenu = 'options'
        optionsMenu.selected = 'mode'
        optionsMenu.draw(textCol[1], textCol[0], textCol[0], textCol[0], textCol[0])
      }
    }
  },

  draw: function(col1, col2) {
    background(backCol)
    ctx.textAlign = "center"
    font('20px Arial')
    fill(col1)
    text('Play Again', 200, 175, 200, 'fill')
    fill(col2)
    text('Game Options', 200, 225, 200, 'fill')
  }
}


// Options Menu
var optionsMenu = {
  selected: 'mode',

  nav: function(event) {
    if (event.key == 'ArrowDown') {
      if (this.selected == 'mode') {
        this.draw(textCol[0], textCol[1], textCol[0], textCol[0], textCol[0])
        this.selected = 'snake'
      } else if (this.selected == 'snake') {
        this.draw(textCol[0], textCol[0], textCol[1], textCol[0], textCol[0])
        this.selected = 'theme'
      } else if (this.selected == 'theme') {
        this.draw(textCol[0], textCol[0], textCol[0], textCol[1], textCol[0])
        this.selected = 'reset'
      } else if (this.selected == 'reset') {
        this.draw(textCol[0], textCol[0], textCol[0], textCol[0], textCol[1])
        this.selected = 'back'
      } else if (this.selected == 'back') {
        this.draw(textCol[1], textCol[0], textCol[0], textCol[0], textCol[0])
        this.selected = 'mode'
      }
    } else if (event.key == 'ArrowUp') {
      if (this.selected == 'mode') {
        this.draw(textCol[0], textCol[0], textCol[0], textCol[0], textCol[1])
        this.selected = 'back'
      } else if (this.selected == 'snake') {
        this.draw(textCol[1], textCol[0], textCol[0], textCol[0], textCol[0])
        this.selected = 'mode'
      } else if (this.selected == 'theme') {
        this.draw(textCol[0], textCol[1], textCol[0], textCol[0], textCol[0])
        this.selected = 'snake'
      } else if (this.selected == 'reset') {
        this.draw(textCol[0], textCol[0], textCol[1], textCol[0], textCol[0]) 
        this.selected = 'theme'
      } else if (this.selected == 'back') {
        this.draw(textCol[0], textCol[0], textCol[0], textCol[1], textCol[0]) 
        this.selected = 'reset'
      }
    } else if (event.key == 'Enter') {
      if (this.selected == 'mode') {
        currentMenu = 'mode'
        if (gameSpeed == 100) {
          modeMenu.draw(textCol[1], textCol[0], textCol[0], textCol[0])
          modeMenu.selected = 'easy'
        } else if (gameSpeed == 80) {
          modeMenu.draw(textCol[0], textCol[1], textCol[0], textCol[0])
          modeMenu.selected = 'normal'
        } else if (gameSpeed == 60) {
          modeMenu.draw(textCol[0], textCol[0], textCol[1], textCol[0])
          modeMenu.selected = 'hard'
        } else if (gameSpeed == 40) {
          modeMenu.draw(textCol[0], textCol[0], textCol[0], textCol[1])
          modeMenu.selected = 'very hard'
        }
      } else if (this.selected == 'snake') {
        currentMenu = 'snake'
        snakeMenu.drawText(textCol[1], textCol[0])
        snakeMenu.drawColors()
      } else if (this.selected == 'theme') {
        if (theme == 'light') {
          lightToDark()
        } else if (theme == 'dark') {
          darkToLight()
        }
        optionsMenu.draw(textCol[0], textCol[0], textCol[1], textCol[0], textCol[0])
      } else if (this.selected == 'reset') {
        localStorage.setItem('highScore', 0)
        document.getElementById('highscore').innerHTML = localStorage.getItem('highScore')
      } else if (this.selected == 'back') {
        currentMenu = 'main'
        mainMenu.draw(textCol[0], textCol[1])
      }
    } else if (event.key == 'Escape') {
      currentMenu = 'main'
      mainMenu.draw(textCol[0], textCol[1])
    }
  }, 

  draw: function(col1, col2, col3, col4, col5) {
    background(backCol)
    fill(col1)
    text('Difficulty', 200, 150, 200, 'fill')
    fill(col2)
    text('Snake', 200, 180, 200, 'fill')
    fill(col3)
    text('Toggle Dark Mode', 200, 210, 200, 'fill')
    fill(col4)
    text('Reset High Score', 200, 240, 200, 'fill')
    fill(col5)
    text('Back', 200, 270, 200, 'fill')
  }
}

// Difficulty Menu
var modeMenu = {
  selected: 'normal',

  nav: function(event) {
    if (event.key == 'ArrowDown') {
      if (this.selected == 'easy') {
        this.draw(textCol[0], textCol[1], textCol[0], textCol[0])
        this.selected = 'normal'
      } else if (this.selected == 'normal') {
        this.draw(textCol[0], textCol[0], textCol[1], textCol[0])
        this.selected = 'hard'
      } else if (this.selected == 'hard') {
        this.draw(textCol[0], textCol[0], textCol[0], textCol[1])
        this.selected = 'very hard'
      }
    } else if (event.key == 'ArrowUp') {
      if (this.selected == 'normal') {
        this.draw(textCol[1], textCol[0], textCol[0], textCol[0])
        this.selected = 'easy'
      } else if (this.selected == 'hard') {
        this.draw(textCol[0], textCol[1], textCol[0], textCol[0])
        this.selected = 'normal'
      } else if (this.selected == 'very hard') {
        this.draw(textCol[0], textCol[0], textCol[1], textCol[0]) 
        this.selected = 'hard'
      }
    } else if (event.key == 'Enter') {
      currentMenu = 'options'
      optionsMenu.draw(textCol[1], textCol[0], textCol[0], textCol[0], textCol[0])
      if (this.selected == 'easy') {
        gameSpeed = 100
      } else if (this.selected == 'normal') {
        gameSpeed = 80
      } else if (this.selected == 'hard') {
        gameSpeed = 60
      } else if (this.selected == 'very hard') {
        gameSpeed = 40
      }
    } else if (event.key == 'Escape') {
      currentMenu = 'options'
      optionsMenu.draw(textCol[1], textCol[0], textCol[0], textCol[0], textCol[0])
    }
  },

  draw: function(col1, col2, col3, col4) {
    background(backCol)
    fill(col1)
    text('Easy', 200, 150, 200, 'fill')
    fill(col2)
    text('Normal', 200, 180, 200, 'fill')
    fill(col3)
    text('Hard', 200, 210, 200, 'fill')
    fill(col4)
    text('Very Hard', 200, 240, 200, 'fill')
  }
}

// Snake Menu
var snakeMenu = {
  headCols: ['grey', 'blue', 'red', 'green'],
  selHeadCol: 0,
  bodyCols: ['grey', 'blue', 'red', 'green'],
  selBodyCol: 0,
  selected: 'headCol',

  nav: function(event) {
    if (event.key == 'ArrowDown') {
      if (this.selected == 'headCol') {
        this.drawText(textCol[0], textCol[1])
        this.drawColors()
        this.selected = 'bodyCol'
      } else if (this.selected == 'bodyCol') {
        this.drawText(textCol[1], textCol[0])
        this.drawColors()
        this.selected = 'headCol'
      }
    } else if (event.key == 'ArrowUp') {
      if (this.selected == 'headCol') {
        this.drawText(textCol[0], textCol[1])
        this.drawColors()
        this.selected = 'bodyCol'
      } else if (this.selected == 'bodyCol') {
        this.drawText(textCol[1], textCol[0])
        this.drawColors()
        this.selected = 'headCol'
      }
    } else if (event.key == 'ArrowRight') {
      if (this.selected == 'headCol') {
        if (this.selHeadCol >= 0 && this.selHeadCol < 3) {
          this.selHeadCol += 1
        } else if (this.selHeadCol == 3) {
          this.selHeadCol = 0
        }
      } else if (this.selected == 'bodyCol') {
        if (this.selBodyCol >= 0 && this.selBodyCol < 3) {
          this.selBodyCol += 1
        } else if (this.selBodyCol == 3) {
          this.selBodyCol = 0
        }
      }
      this.drawColors()
    } else if (event.key == 'ArrowLeft') {
      if (this.selected == 'headCol') {
        if (this.selHeadCol > 0 && this.selHeadCol <= 3) {
          this.selHeadCol -= 1
        } else if (this.selHeadCol == 0) {
          this.selHeadCol = 3
        }
      } else if (this.selected == 'bodyCol') {
        if (this.selBodyCol > 0 && this.selBodyCol <= 3) {
          this.selBodyCol -= 1
        } else if (this.selBodyCol == 0) {
          this.selBodyCol = 3
        }
      }
      this.drawColors()
    } else if (event.key == 'Enter') {
      currentMenu = 'options'
      optionsMenu.draw(textCol[0], textCol[1], textCol[0], textCol[0], textCol[0])
      if (this.selHeadCol == 0) {
        snakeHeadCol = ['darkgrey', 'black']
      } else if (this.selHeadCol == 1) {
        snakeHeadCol = ['darkblue', 'black']
      } else if (this.selHeadCol == 2) {
        snakeHeadCol = ['darkred', 'black']
      } else if (this.selHeadCol == 3) {
        snakeHeadCol = ['darkgreen', 'black']
      }
      if (this.selBodyCol == 0) {
        snakeCol = ['lightgrey', 'grey']
      } else if (this.selBodyCol == 1) {
        snakeCol = ['lightblue', 'blue']
      } else if (this.selBodyCol == 2) {
        snakeCol = ['pink', 'red']
      } else if (this.selBodyCol == 3) {
        snakeCol = ['lightgreen', 'green']
      }
    } else if (event.key == 'Escape') {
      currentMenu = 'options'
      optionsMenu.draw(textCol[0], textCol[1], textCol[0], textCol[0], textCol[0])
      this.selHeadCol = 0
      this.selBodyCol = 0
    }
  },

  drawText: function(col1, col2) {
    background(backCol)
    fill(col1)
    text('Head Color', 200, 175, 200, 'fill')
    fill(col2)
    text('Body Color', 200, 225, 200, 'fill')
  },

  drawColors: function() {
    if (this.selHeadCol == 0) {
      fill('darkgrey')
      stroke('black')
    } else if (this.selHeadCol == 1) {
      fill('darkblue')
      stroke('black')
    } else if (this.selHeadCol == 2) {
      fill('darkred')
      stroke('black')
    } else if (this.selHeadCol == 3) {
      fill('darkgreen')
      stroke('black')
    }
    rect(195, 190, 10, 10, 'fill')
    rect(195, 190, 10, 10, 'stroke')
    if (this.selBodyCol == 0) {
      fill('lightgrey')
    stroke('grey')
    } else if (this.selBodyCol == 1) {
      fill('lightblue')
      stroke('blue')
    } else if (this.selBodyCol == 2) {
      fill('pink')
      stroke('red')
    } else if (this.selBodyCol == 3) {
      fill('lightgreen')
      stroke('green')
    }
    rect(195, 240, 10, 10, 'fill')
    rect(195, 240, 10, 10, 'stroke')
  }
}

// General Menu Functions
var currentMenu = 'main'
var backCol = 'white'
var textCol = ['black', 'grey']

function createStartMenu() {
  mainMenu.draw(textCol[1], textCol[0])
}

function createPlayAgainMenu() {
  currentMenu = 'main2'
  mainMenu2.draw(textCol[1], textCol[0])
}

// Dark Mode
var theme = 'light'
function lightToDark() {
  theme = 'dark'
  document.querySelector('link').setAttribute('href', 'css/dark.css')
  textCol = ['white', 'darkgrey']
  backCol = 'grey'
  
  localStorage.setItem('theme', 'dark')
}

function darkToLight() {
  theme = 'light'
  document.querySelector('link').setAttribute('href', 'css/light.css')
  textCol[0] = 'black'
  backCol = 'white'
  localStorage.setItem('theme', 'light')
}