import { Ship } from './ship';
import { Gameboard } from './gameboard';
import { Player } from './player';
import { Render } from './dom';

const humanPlayer = new Player('human');
const computerPlayer = new Player('computer');

const gameboardHuman = new Gameboard();
const gameboardComputer = new Gameboard();

function initGame() {
  Render.renderGameboards();
}

// Create function to end the game when all boats are sunk, call it from gameboard class
export { initGame, humanPlayer, computerPlayer, gameboardHuman, gameboardComputer };
