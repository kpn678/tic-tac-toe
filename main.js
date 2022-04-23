var game = new Game();

//query selectors
game.board[0] = document.querySelector('#b0');
game.board[1] = document.querySelector('#b1');
game.board[2] = document.querySelector('#b2');
game.board[3] = document.querySelector('#b3');
game.board[4] = document.querySelector('#b4');
game.board[5] = document.querySelector('#b5');
game.board[6] = document.querySelector('#b6');
game.board[7] = document.querySelector('#b7');
game.board[8] = document.querySelector('#b8');
var gameBoard = document.querySelector('.game-board');
var turnHeader = document.querySelector('h2');
var player1Wins = document.querySelector('#player1-wins');
var player2Wins = document.querySelector('#player2-wins');

game.board[0].addEventListener('click', chooseBox);
game.board[1].addEventListener('click', chooseBox);
game.board[2].addEventListener('click', chooseBox);
game.board[3].addEventListener('click', chooseBox);
game.board[4].addEventListener('click', chooseBox);
game.board[5].addEventListener('click', chooseBox);
game.board[6].addEventListener('click', chooseBox);
game.board[7].addEventListener('click', chooseBox);
game.board[8].addEventListener('click', chooseBox);

function chooseBox() {
  var box = event.target;
  if (game.currentPlayer === game.player1) {
    box.innerText = game.player1.token;
    box.disabled = true;
  } else {
    box.innerText = game.player2.token;
    box.disabled = true;
  }
  game.checkForWin();
}

// function updateTurnHeader() {
//
//   turnHeader.innerText = ``
//alternate player turns
//display when someone wins
//display if a draw happens
// }

//function updateWinsDisplays
