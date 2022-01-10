// Start Menu
var mainMenu = {
  options: ['start', 'options'],
  selected: 'start',

  nav: function(event) {
    if (event.key == 'ArrowDown' && mainMenu.selected == 'start') {
      this.draw('black', 'grey');
      this.selected = 'options';
    } else if (event.key == 'ArrowUp' && mainMenu.selected == 'options') {
      this.draw('grey', 'black');
      this.selected = 'start';
    }
  },

  select: function(event) {
    if (event.key == 'Enter') {
      if (this.selected == 'start') {

      } else if (this.selected == 'options') {

      }
    }
  },

  draw: function(col1, col2) {
    background('white');
    font('20px Arial');
    fill(col1);
    text('Start Game', 150, 175, 300, 'fill');
    fill(col2)
    text('Game Options', 137, 225, 275, 'fill');
  }
};

// Options Menu
var optionsMenu = {
  options: ['']
}

function createStartMenu() {
  mainMenu.draw('grey', 'black');
}