class Game {
  constructor() {
    this.player1 = new Player(1, 'X');
    this.player2 = new Player(2, 'O');
    this.currentPlayer = this.player1;
    this.turnCounter = 0;
    this.gamesPlayed = 0;
  }

  updateGameBoard(selectedSpot) {
    this.turnCounter++;
    if (this.currentPlayer === this.player1) {
      this.player1.choices.push(selectedSpot);
    } else {
      this.player2.choices.push(selectedSpot);
    }
    this.checkGameStatus();
  }

  checkGameStatus() {
    if (this.checkWinningCombos(this.player1.choices) === true) {
      console.log('Player 1 Wins!')
      this.player1.increaseWins();
      this.resetGame();
    } else if (this.checkWinningCombos(this.player2.choices) === true) {
      console.log('Player 2 Wins!')
      this.player2.increaseWins();
      this.resetGame();
    } else if (this.turnCounter === 9) {
      console.log('This is a draw!')
      this.resetGame();
    } else {
      this.updateTurn();
    }
  }

  checkWinningCombos(playerCombos) {
    if ((playerCombos.includes('b0') && playerCombos.includes('b1') && playerCombos.includes('b2')) ||
    (playerCombos.includes('b3') && playerCombos.includes('b4') && playerCombos.includes('b5')) ||
    (playerCombos.includes('b6') && playerCombos.includes('b7') && playerCombos.includes('b8')) ||
    (playerCombos.includes('b0') && playerCombos.includes('b3') && playerCombos.includes('b6')) ||
    (playerCombos.includes('b1') && playerCombos.includes('b4') && playerCombos.includes('b7')) ||
    (playerCombos.includes('b2') && playerCombos.includes('b5') && playerCombos.includes('b8')) ||
    (playerCombos.includes('b0') && playerCombos.includes('b4') && playerCombos.includes('b8')) ||
    (playerCombos.includes('b2') && playerCombos.includes('b4') && playerCombos.includes('b6'))) {
      return true;
    }
  }

  updateTurn() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
      console.log('Player 2 Turn');
    } else {
      this.currentPlayer = this.player1;
      console.log('Player 1 Turn');
    }
  }

  resetGame() {
    this.gamesPlayed++
    if (this.gamesPlayed % 2 === 0) {
      this.currentPlayer = this.player1;
    } else {
      this.currentPlayer = this.player2;
    }
    this.turnCounter = 0;
  }
};
