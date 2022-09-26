// GLOBAL VARIABLES
var mainContainer = document.querySelector(".main-container");
var classic = document.querySelector("#classic");
var difficult = document.querySelector("#difficult");
var reset = document.querySelector("#restart-button");
var chooseYourGame = document.querySelector("#chooseYourGame");
var gameContainer = document.querySelector(".game-container");
var difficultFighters = document.querySelector(".game-container > span");
var fighterButtons = document.querySelectorAll(".game-container button");
var result = document.querySelector(".result");
var humanToken = document.querySelector(".left-sec > div > .emoj");
var player1 = document.querySelector(".left-sec > div > h3");
var wins1 = document.querySelector("#human-wins");
var computerToken = document.querySelector(".right-sec > div > .emoj");
var computer1 = document.querySelector(".right-sec > div > h3");
var wins2 = document.querySelector("#computer-wins");
var resultImage1 = document.querySelector("#img1");
var resultImage2 = document.querySelector("#img2");
var game;

// EVENT LISTENERS
window.addEventListener("load", load);
classic.addEventListener("click", classicGame);
difficult.addEventListener("click", difficultGame);
reset.addEventListener("click", resetGame);

for (var i = 0; i < fighterButtons.length; i++) {
  fighterButtons[i].addEventListener("click", fight);
}

// FUNCTIONS
function load() {
  game = new Game();
  humanToken.innerText = game.human.token;
  player1.innerText = game.human.name;
  wins1.innerText = `Wins: ${game.human.wins}`;
  computerToken.innerText = game.computer.token;
  computer1.innerText = game.computer.name;
  wins2.innerText = `Wins: ${game.computer.wins}`;
}

function chooseType(gameType) {
  mainContainer.classList.add("hidden");
  chooseYourGame.innerText = "Choose your fighter!";
  gameContainer.classList.remove("hidden");
  reset.classList.remove("hidden");
  game.chooseGameType(gameType);
}

function classicGame() {
  chooseType("classic");
}

function difficultGame() {
  chooseType("difficult");
  difficultFighters.classList.remove("hidden");
}

function fight(event) {
  gameContainer.classList.add("hidden");
  result.classList.remove("hidden");
  var buttonId = event.target.closest("button").id;
  game.setElements(buttonId);
  var message = game.checkWin();
  wins1.innerText = `Wins: ${game.human.wins}`;
  wins2.innerText = `Wins: ${game.computer.wins}`;
  chooseYourGame.innerText = message;
  resultImage1.src = `img-src/happy-${game.human.element}.png`;
  resultImage2.src = `img-src/happy-${game.computer.element}.png`;
  setTimeout(cycle, 2000);

  function cycle() {
    chooseYourGame.innerText = "Choose your fighter!";
    result.classList.add("hidden");
    gameContainer.classList.remove("hidden");
  }
}

function resetGame() {
  chooseYourGame.innerText = "Choose your fighter!";
  gameContainer.classList.add("hidden");
  result.classList.add("hidden");
  mainContainer.classList.remove("hidden");
  difficultFighters.classList.add("hidden");
  reset.classList.add("hidden");
}
