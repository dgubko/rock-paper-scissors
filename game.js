class Game {
  constructor(gameType) {
    this.human = new Player("Human", "🥷");
    this.computer = new Player("Computer", "💻");
    this.gameType = gameType;
    this.classicItems = ["rock", "paper", "scissors"];
    this.difficultItems = ["rock", "paper", "scissors", "alien", "lizard"];
    this.currentWinner;
  }
  setElements(element) {
    var itemArray =
      this.gameType === "classic" ? this.classicItems : this.difficultItems;
    this.human.takeTurn(element);
    this.computer.randomTurn(itemArray);
  }
  checkWin() {
    var playerChoise = this.human.element;
    var computerChoise = this.computer.element;
    var fight = `${playerChoise} ${computerChoise}`;
    var humanWins = ["rock scissors", "paper rock", "scissors paper"];
    var computerWins = ["rock paper", "paper scissors", "scissors rock"];
    if (humanWins.includes(fight)) {
      this.currentWinner = this.human;
      this.human.wins++;
      return "HUMAN WINS";
    }
    if (computerWins.includes(fight)) {
      this.currentWinner = this.computer;
      this.computer.wins++;
      return "COMPUTER WINS";
    }
    return "DRAW";
  }
  chooseGameType(gameType) {
    this.gameType = gameType;
  }
}
