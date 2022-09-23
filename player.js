class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.element;
  }
  takeTurn(element) {
    this.element = element;
  }
  randomTurn(itemArray) {
    this.element = itemArray[Math.floor(Math.random() * itemArray.length)];
  }
}
