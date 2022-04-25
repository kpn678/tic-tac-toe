
//query selectors
box0 = document.querySelector('#b0');
box1 = document.querySelector('#b1');
box2 = document.querySelector('#b2');
box3 = document.querySelector('#b3');
box4 = document.querySelector('#b4');
box5 = document.querySelector('#b5');
box6 = document.querySelector('#b6');
box7 = document.querySelector('#b7');
box8 = document.querySelector('#b8');

//global variables
var game = new Game();
var gameBoard = document.querySelector('.game-board');
var turnHeader = document.querySelector('h2');
var player1Wins = document.querySelector('#player1-wins');
var player2Wins = document.querySelector('#player2-wins');

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
  var box = event.target
  box.innerText = game.currentPlayer.token;
  box.classList.add("not-allowed");
  var boxID = event.target.getAttribute('id');
  game.updateGameBoard(boxID);
  updateTurnHeader();
}

function updateTurnHeader() {
  if (game.gameWon === true) {
    turnHeader.innerText = `${game.currentPlayer.token} Won!`
    console.log(`${game.currentPlayer.token} Won!`)
  } else if (game.turnCounter === 9) {
    turnHeader.innerText = 'This is a draw!'
  } else {
    turnHeader.innerText = `It is ${game.currentPlayer.token}'s turn!`
  }
}

// function clearGameBoard() {
//   var boxes = document.querySelector('.box');
//   boxes.innerText = "";
//   boxes.classList.remove("not-allowed");
// // resetGame is already being invoked, so game data is good to go
// };

//function updateWinsDisplays() {
// updates as player increase wins updates
//}
