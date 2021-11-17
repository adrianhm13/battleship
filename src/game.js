import { Gameboard } from './gameboard';
import { Player } from './player';
import { Render } from './dom';

const humanPlayer = new Player('human');
const computerPlayer = new Player('computer');

const gameboardHuman = new Gameboard('human');
const gameboardComputer = new Gameboard('computer');



function initGame() {
  Render.renderGameboards();
}
function gameEnd(loser){
  alert(`The loser is: ${loser}`)
}

export { initGame, humanPlayer, computerPlayer, gameboardHuman, gameboardComputer, gameEnd };
