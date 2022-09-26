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
  saveWinsToStorage() {
    localStorage.setItem(this.name, this.wins);
  }
  retrieveWinsFromStorage() {
    var value = localStorage.getItem(this.name);
    if (value) {
      this.wins = value;
    }
  }
  resetGame() {
    localStorage.removeItem(this.name);
    this.elements = "";
    this.wins = 0;
  }
}
