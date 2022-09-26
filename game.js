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
    var humanWins = [
      "rock scissors",
      "paper rock",
      "scissors paper",
      "rock lizard",
      "paper alien",
      "scissors lizard",
      "lizard paper",
      "lizard alien",
      "alien scissors",
      "alien rock",
    ];
    var computerWins = [
      "rock paper",
      "paper scissors",
      "scissors rock",
      "lizard rock",
      "alien paper",
      "lizard scissors",
      "paper lizard",
      "alien lizard",
      "scissors alien",
      "rock alien",
    ];
    if (humanWins.includes(fight)) {
      this.currentWinner = this.human;
      this.human.wins++;
      this.human.saveWinsToStorage();
      return "🥷HUMAN WINS THIS ROUND🥷";
    }
    if (computerWins.includes(fight)) {
      this.currentWinner = this.computer;
      this.computer.wins++;
      this.computer.saveWinsToStorage();
      return "💻COMPUTER WINS THIS ROUND💻";
    }
    return "😅IT'S A DRAW😅";
  }
  chooseGameType(gameType) {
    this.gameType = gameType;
  }
  onLoad() {
    this.human.retrieveWinsFromStorage();
    this.computer.retrieveWinsFromStorage();
  }
}
