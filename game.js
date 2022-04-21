class Game {
  constructor() {
    this.board = [
    'b0', 'b1', 'b2',
    'b3', 'b4', 'b5',
    'b6', 'b7', 'b8'
    ];
    this.player1 = new Player(1, 'X', true);
    this.player2 = new Player(2, 'O', false);
    this.currentPlayer = updateTurn();
    this.turnCounter = 0;
  }

  updateGameBoardData(selectedSpot) {
    for (var i = 0; i < this.board.length; i++) {
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
    // var possibleWinPatterns = [
    // ['b0', 'b1', 'b2'], ['b3', 'b4', 'b5'], ['b6', 'b7', 'b8'],
    // ['b0', 'b3', 'b6'], ['b1', 'b4', 'b7'], ['b2', 'b5', 'b8'],
    // ['b0', 'b4', 'b8'], ['b2', 'b4', 'b6']
    // ]
    if (this.board[0] === this.player1.token && this.board[1] === this.player1.token && this.board[2] === this.player1.token) ||
    (this.board[3] === this.player1.token && this.board[4] === this.player1.token && this.board[5] === this.player1.token) ||
    (this.board[6] === this.player1.token && this.board[7] === this.player1.token && this.board[8] === this.player1.token) ||
    (this.board[0] === this.player1.token && this.board[3] === this.player1.token && this.board[6] === this.player1.token) ||
    (this.board[1] === this.player1.token && this.board[4] === this.player1.token && this.board[7] === this.player1.token) ||
    (this.board[2] === this.player1.token && this.board[5] === this.player1.token && this.board[8] === this.player1.token) ||
    (this.board[0] === this.player1.token && this.board[4] === this.player1.token && this.board[8] === this.player1.token) ||
    (this.board[2] === this.player1.token && this.board[4] === this.player1.token && this.board[6] === this.player1.token) {
      console.log('Player 1 Wins!')
      this.player1.increaseWins();
      resetGame();
    } else if (this.board[0] === this.player2.token && this.board[1] === this.player2.token && this.board[2] === this.player2.token) ||
    (this.board[3] === this.player2.token && this.board[4] === this.player2.token && this.board[5] === this.player2.token) ||
    (this.board[6] === this.player2.token && this.board[7] === this.player2.token && this.board[8] === this.player2.token) ||
    (this.board[0] === this.player2.token && this.board[3] === this.player2.token && this.board[6] === this.player2.token) ||
    (this.board[1] === this.player2.token && this.board[4] === this.player2.token && this.board[7] === this.player2.token) ||
    (this.board[2] === this.player2.token && this.board[5] === this.player2.token && this.board[8] === this.player2.token) ||
    (this.board[0] === this.player2.token && this.board[4] === this.player2.token && this.board[8] === this.player2.token) ||
    (this.board[2] === this.player2.token && this.board[4] === this.player2.token && this.board[6] === this.player2.token) {
      console.log('Player 2 Wins!')
      this.player2.increaseWins();
      resetGame();
    } else if {
      checkForDraw();
    } else {
      updateTurn();
    }
  }

  checkForDraw() {
    if (this.turnCounter === 9) {
      resetGame();
    } else {
      return false;
    }
  }

  resetGame(){
  //once game is over, all the boxes are unselected, losing player
  //begins
  }
};
