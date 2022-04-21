class Game {
  constructor() {
    this.board = [b1, b2, b3, b4, b5, b6, b7, b8, b9]
    this.player1 = new Player(1, 'X', 0, true);
    this.player2 = new Player(2, 'O', 0, false);
    this.turnCounter = 0;

  }
  updateGameBoardData() {

  }
  
  updateTurn() {
    if (this.turnCounter % 2 === 0 && this.player1.isTurn === true) {
      return this.player2.isTurn === true && this.player1.isTurn === false;
    } else {
      return this.player1.isTurn === true && this.player2.isTurn === false;
    }
  }

  checkForWin() {
  //if various box combinations have been selected, then win happens
  }
  checkForDraw() {
  //if none of conditions in checkForWinCondition selected
  //and all boxes selected, then draw happens
  }
  resetGame(){
  //once win is over, all the boxes are unselected, losing player
  //begins
  }
};
