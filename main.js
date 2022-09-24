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

// EVENT LISTENERS
// we add event on load and initialize the game, and make the wins dinamic
classic.addEventListener("click", classicGame);
difficult.addEventListener("click", difficultGame);
reset.addEventListener("click", resetGame);

for (var i = 0; i < fighterButtons.length; i++) {
  fighterButtons[i].addEventListener("click", fight);
}

// FUNCTIONS
function chooseType() {
  mainContainer.classList.add("hidden");
  chooseYourGame.innerText = "Choose your fighter!";
  gameContainer.classList.remove("hidden");
  reset.classList.remove("hidden");
}

function classicGame() {
  // call chooseGameType with argument classic from game object
  chooseType();
}

function difficultGame() {
  // call chooseGameType with argument difficult from game object
  chooseType();
  difficultFighters.classList.remove("hidden");
}

function fight() {
  gameContainer.classList.add("hidden");
  result.classList.remove("hidden");
  chooseYourGame.innerText = "Human wins";
  // get an id from clicked element using event target.
  // call setElements with argument id.
  // call checkWin.
  // display win on side panels.
  // set winner message. modify to dinamic. line 51
  // change img and make them dinamic
}

function resetGame() {
  chooseYourGame.innerText = "Choose your fighter!";
  gameContainer.classList.add("hidden");
  result.classList.add("hidden");
  mainContainer.classList.remove("hidden");
  difficultFighters.classList.add("hidden");
}
