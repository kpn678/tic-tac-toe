var game = new Game();

//query selectors
var turnHeader = document.querySelector('h2');
var boxes = document.querySelectorAll('.box');
var box0 = document.querySelector('#b0');
var box1 = document.querySelector('#b1');
var box2 = document.querySelector('#b2');
var box3 = document.querySelector('#b3');
var box4 = document.querySelector('#b4');
var box5 = document.querySelector('#b5');
var box6 = document.querySelector('#b6');
var box7 = document.querySelector('#b7');
var box8 = document.querySelector('#b8');
var player1Wins = document.querySelector('#player1Wins');
var player2Wins = document.querySelector('#player2Wins');

//event listeners
box0.addEventListener('click', chooseBox);
box1.addEventListener('click', chooseBox);
box2.addEventListener('click', chooseBox);
box3.addEventListener('click', chooseBox);
box4.addEventListener('click', chooseBox);
box5.addEventListener('click', chooseBox);
box6.addEventListener('click', chooseBox);
box7.addEventListener('click', chooseBox);
box8.addEventListener('click', chooseBox);

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
