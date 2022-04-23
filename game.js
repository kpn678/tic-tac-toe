class Game {
  constructor() {
    this.board = [
    'b0', 'b1', 'b2',
    'b3', 'b4', 'b5',
    'b6', 'b7', 'b8'
    ];
    this.player1 = new Player(1, 'X');
    this.player2 = new Player(2, 'O');
    this.currentPlayer = this.player1;
    this.turnCounter = 0;
    this.gamesPlayed = 0;
  }

  updateGameBoardData(selectedSpot) {
    if (this.board.includes(selectedSpot)) {
      for (var i = 0; i < this.board.length; i++) {
        if (this.board[i] === selectedSpot) {
          this.board.splice(i, 1, this.currentPlayer.token)
          this.checkForWin();
        }
      }
    } else {
      console.log('Spot taken, try again!');
    }
  }

  checkForWin() {
    if ((this.board[0] === this.player1.token && this.board[1] === this.player1.token && this.board[2] === this.player1.token) ||
    (this.board[3] === this.player1.token && this.board[4] === this.player1.token && this.board[5] === this.player1.token) ||
    (this.board[6] === this.player1.token && this.board[7] === this.player1.token && this.board[8] === this.player1.token) ||
    (this.board[0] === this.player1.token && this.board[3] === this.player1.token && this.board[6] === this.player1.token) ||
    (this.board[1] === this.player1.token && this.board[4] === this.player1.token && this.board[7] === this.player1.token) ||
    (this.board[2] === this.player1.token && this.board[5] === this.player1.token && this.board[8] === this.player1.token) ||
    (this.board[0] === this.player1.token && this.board[4] === this.player1.token && this.board[8] === this.player1.token) ||
    (this.board[2] === this.player1.token && this.board[4] === this.player1.token && this.board[6] === this.player1.token)) {
      console.log('Player 1 Wins!')
      this.player1.increaseWins();
      this.resetGame();
    } else if ((this.board[0] === this.player2.token && this.board[1] === this.player2.token && this.board[2] === this.player2.token) ||
    (this.board[3] === this.player2.token && this.board[4] === this.player2.token && this.board[5] === this.player2.token) ||
    (this.board[6] === this.player2.token && this.board[7] === this.player2.token && this.board[8] === this.player2.token) ||
    (this.board[0] === this.player2.token && this.board[3] === this.player2.token && this.board[6] === this.player2.token) ||
    (this.board[1] === this.player2.token && this.board[4] === this.player2.token && this.board[7] === this.player2.token) ||
    (this.board[2] === this.player2.token && this.board[5] === this.player2.token && this.board[8] === this.player2.token) ||
    (this.board[0] === this.player2.token && this.board[4] === this.player2.token && this.board[8] === this.player2.token) ||
    (this.board[2] === this.player2.token && this.board[4] === this.player2.token && this.board[6] === this.player2.token)) {
      console.log('Player 2 Wins!')
      this.player2.increaseWins();
      resetGame();
    } else if (this.turnCounter === 9) {
      console.log('This is a draw!')
      this.resetGame();
    } else {
      this.updateTurn();
    }
  }

  updateTurn() {
    this.turnCounter++;
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
      console.log('Player 2 Turn');
    } else {
      this.currentPlayer = this.player1;
      console.log('Player 1 Turn');
    }
  }

  resetGame(){
    this.gamesPlayed++
    if (this.gamesPlayed % 2 === 0) {
      this.currentPlayer = this.player1;
    } else {
      this.currentPlayer = this.player2;
    }
    this.board = [
    'b0', 'b1', 'b2',
    'b3', 'b4', 'b5',
    'b6', 'b7', 'b8'
    ];
    this.turnCounter = 0;
  }
};
