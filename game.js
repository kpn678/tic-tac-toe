class Game {
  constructor() {
    this.board = [b1, b2, b3, b4, b5, b6, b7, b8, b9]
  }
  updateGameBoardData() {
    var player1 = new Player(1, 'X');
    var player2 = new Player(2, 'O');
  }
  updatePlayerTurn() {
  //if player 1 selects, then player 2 selects and vice versa
  }
  checkForWinCondition() {
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
