class Game {
  constructor() {
    this.board = [
    'b0', 'b1', 'b2',
    'b3', 'b4', 'b5',
    'b6', 'b7', 'b8'
    ];
    this.player1 = new Player(1, 'X', 0, true);
    this.player2 = new Player(2, 'O', 0, false);
    this.currentPlayer = updateTurn();
    this.turnCounter = 0;
  }

  updateGameBoardData(selectedSpot) {
    for (var i = 0; i < this.board.length, i++) {
      if (this.board[i] === selectedSpot) {
        this.board.splice(i, 1, this.currentPlayer.token)
      }
    }
  }

  updateTurn() {
    this.turnCounter++;
    if (this.turnCounter % 2 === 0 && this.player1.isTurn === true) {
      this.player2.isTurn === true
      this.player1.isTurn === false;
      return player2;
    } else {
      this.player1.isTurn === true;
      this.player2.isTurn === false;
      return player1;
    }
  }

  checkForWin() {
  //if various box combinations have been selected, then win happens
  }

  checkForDraw() {
    if (this.turnCounter === 9) {
      resetGame();
    }
  }

  resetGame(){
  //once game is over, all the boxes are unselected, losing player
  //begins
  }
};
