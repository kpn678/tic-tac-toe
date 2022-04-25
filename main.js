var game = new Game();

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
  var box = event.target;
  if (game.currentPlayer === game.player1) {
    box.innerText = game.player1.token;
    box.classList.add("not-allowed");
  } else {
    box.innerText = game.player2.token;
    box.classList.add("not-allowed");
  }
  var boxID = event.target.getAttribute('id');
  game.updateGameBoard(boxID);
  // clearGameBoard();
}

// function clearGameBoard() {
//   box.innerText = "";
//add a timeout
//make it so each box can be clicked again
//resetGame is already being invoked, so game data is good to go
// };

// function updateTurnHeader() {
//turnHeader.innerText = ``
//alternate player turns
//display when someone wins
//display if a draw happens
//resets to correct player once win/draw occurs
// }

//function updateWinsDisplays() {
// updates as player increase wins updates
//}
