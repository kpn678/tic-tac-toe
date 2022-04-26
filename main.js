var game = new Game();

//query selectors
var turnHeader = document.querySelector('h2');
var boxes = document.querySelectorAll('.box');
var player1Wins = document.querySelector('#player1Wins');
var player2Wins = document.querySelector('#player2Wins');

//event listeners
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', chooseBox);
};

function chooseBox() {
  var box = event.target;
  box.innerText = game.currentPlayer.token;
  box.classList.add("disabled");
  var boxID = event.target.getAttribute('id');
  game.updateGameBoard(boxID);
  updateTurnHeader();
}

function updateTurnHeader() {
  if (game.gameWon) {
    turnHeader.innerText = `Player ${game.currentPlayer.token} Won!`
    updateWinsDisplays();
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].classList.add("disabled");
    }
  } else if (game.turnCounter === 9) {
    turnHeader.innerText = 'This is a draw!'
  } else {
    turnHeader.innerText = `It is Player ${game.currentPlayer.token}'s turn!`
  }
}

function updateWinsDisplays() {
  player1Wins.innerText = `${game.player1.wins} Wins`;
  player2Wins.innerText = `${game.player2.wins} Wins`;
}

function clearGameBoard() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerText = "";
    boxes[i].classList.remove("disabled");
    turnHeader.innerText = `It is Player ${game.currentPlayer.token}'s turn!`;
  }
};
