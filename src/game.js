import { Gameboard } from './gameboard';
import { Player } from './player';
import { Render } from './dom';

const humanPlayer = new Player('human');
const computerPlayer = new Player('computer');

const gameboardHuman = new Gameboard('human');
const gameboardComputer = new Gameboard('computer');

gameboardHuman.placeShip('carrier', 0, 0, 'vertical')
gameboardHuman.placeShip('battleship', 1, 0, 'vertical')

gameboardComputer.placeShip('battleship', 1, 0, 'vertical')
gameboardComputer.placeShip('carrier', 0, 0, 'vertical')

function initGame() {
  Render.renderGameboards();
}
function gameEnd(loser){
  alert(`The loser is: ${loser}`)
}

export { initGame, humanPlayer, computerPlayer, gameboardHuman, gameboardComputer, gameEnd };
