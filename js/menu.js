// Start Menu
var mainMenu = {
  selected: 'start',

  nav: function(event) {
    if (event.key == 'ArrowDown' && this.selected == 'start') {
      this.draw('black', 'grey')
      this.selected = 'options'
    } else if (event.key == 'ArrowUp' && this.selected == 'options') {
      this.draw('grey', 'black')
      this.selected = 'start'
    } else if (event.key == 'Enter') {
      if (this.selected == 'start') {
        startGame()
      } else if (this.selected == 'options') {
        currentMenu = 'options'
        optionsMenu.selected = 'mode'
        optionsMenu.draw('grey', 'black', 'black', 'black', 'black')
      }
    }
  },

  draw: function(col1, col2) {
    background('white')
    ctx.textAlign = "center"
    font('20px Arial')
    fill(col1)
    text('Start Game', 200, 175, 200, 'fill')
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
        this.draw('black', 'grey', 'black', 'black', 'black')
        this.selected = 'snake'
      } else if (this.selected == 'snake') {
        this.draw('black', 'black', 'grey', 'black', 'black')
        this.selected = 'theme'
      } else if (this.selected == 'theme') {
        this.draw('black', 'black', 'black', 'grey', 'black')
        this.selected = 'reset'
      } else if (this.selected == 'reset') {
        this.draw('black', 'black', 'black', 'black', 'grey')
        this.selected = 'back'
      } else if (this.selected == 'back') {
        this.draw('grey', 'black', 'black', 'black', 'black')
        this.selected = 'mode'
      }
    } else if (event.key == 'ArrowUp') {
      if (this.selected == 'mode') {
        this.draw('black', 'black', 'black', 'black', 'grey')
        this.selected = 'back'
      } else if (this.selected == 'snake') {
        this.draw('grey', 'black', 'black', 'black', 'black')
        this.selected = 'mode'
      } else if (this.selected == 'theme') {
        this.draw('black', 'grey', 'black', 'black', 'black')
        this.selected = 'snake'
      } else if (this.selected == 'reset') {
        this.draw('black', 'black', 'grey', 'black', 'black') 
        this.selected = 'theme'
      } else if (this.selected == 'back') {
        this.draw('black', 'black', 'black', 'grey', 'black') 
        this.selected = 'reset'
      }
    } else if (event.key == 'Enter') {
      if (this.selected == 'mode') {
        currentMenu = 'mode'
        modeMenu.draw('black', 'grey', 'black', 'black')
      } else if (this.selected == 'snake') {

      } else if (this.selected == 'theme') {
        
      } else if (this.selected == 'reset') {
        
      } else if (this.selected == 'back') {
        currentMenu = 'main'
        mainMenu.draw('black', 'grey')
      }
    }
  }, 

  draw: function(col1, col2, col3, col4, col5) {
    background('white')
    fill(col1)
    text('Difficulty', 200, 150, 200, 'fill')
    fill(col2)
    text('Snake', 200, 180, 200, 'fill')
    fill(col3)
    text('Theme', 200, 210, 200, 'fill')
    fill(col4)
    text('Reset High Score', 200, 240, 200, 'fill')
    fill(col5)
    text('Back', 200, 270, 200, 'fill')
  }
}

// Difficulty Menu
var modeMenu = {
  choices: ['easy', 'normal', 'hard', 'very hard'],
  selected: 'normal',

  nav: function(event) {
    if (event.key == 'ArrowDown') {
      if (this.selected == 'easy') {
        this.draw('black', 'grey', 'black', 'black')
        this.selected = 'normal'
      } else if (this.selected == 'normal') {
        this.draw('black', 'black', 'grey', 'black')
        this.selected = 'hard'
      } else if (this.selected == 'hard') {
        this.draw('black', 'black', 'black', 'grey')
        this.selected = 'very hard'
      }
    } else if (event.key == 'ArrowUp') {
      if (this.selected == 'normal') {
        this.draw('grey', 'black', 'black', 'black')
        this.selected = 'easy'
      } else if (this.selected == 'hard') {
        this.draw('black', 'grey', 'black', 'black')
        this.selected = 'normal'
      } else if (this.selected == 'very hard') {
        this.draw('black', 'black', 'grey', 'black') 
        this.selected = 'hard'
      }
    } else if (event.key == 'Enter') {
      currentMenu = 'options'
      optionsMenu.draw('grey', 'black', 'black', 'black', 'black')
      if (this.selected == 'easy') {
        gameSpeed = 100
      } else if (this.selected == 'normal') {
        gameSpeed = 80
      } else if (this.selected == 'hard') {
        gameSpeed = 60
      } else if (this.selected == 'very hard') {
        gameSpeed = 40
      }
    }
  },

  draw: function(col1, col2, col3, col4) {
    background('white')
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

// General Menu Functions
var currentMenu, backCol, textCol
function createStartMenu() {
  currentMenu = 'main'
  mainMenu.draw('grey', 'black')
  backCol = 'white'
  textCol = 'black'
}