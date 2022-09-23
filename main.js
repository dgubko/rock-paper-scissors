var game = new Game("classic");
game.setElements("paper");
console.log(game.human.element);
console.log(game.computer.element);
var message = game.checkWin();
console.log(message);
