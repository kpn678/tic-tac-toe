class Game {
  constructor() {
    this.player1 = new Player(1, 'X');
    this.player2 = new Player(2, 'O');
    this.currentPlayer = this.player1;
    this.gamesPlayed = 0;
    this.gameWon = false;
    this.turnCounter = 0;
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
    if (this.checkWinningCombos(this.currentPlayer.choices) === true) {
      this.gameWon = true;
      this.currentPlayer.increaseWins();
      this.resetGameTimer();
    } else if (this.turnCounter === 9) {
      this.resetGameTimer();
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
    } else {
      this.currentPlayer = this.player1;
    }
  }

  resetGameTimer() {
    setTimeout(this.resetGameData.bind(this), 1000);
  }

  resetGameData() {
    this.player1.choices = [];
    this.player2.choices = [];
    this.gamesPlayed++
    this.gameWon = false;
    this.turnCounter = 0;
    if (this.gamesPlayed % 2 === 0) {
      this.currentPlayer = this.player1;
    } else {
      this.currentPlayer = this.player2;
    }
    clearGameBoard();
  }
};
