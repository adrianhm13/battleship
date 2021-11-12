/* eslint-disable no-plusplus */
import { Gameboard } from './gameboard';
import { Player } from './player';
import { humanPlayer, computerPlayer, gameboardHuman, gameboardComputer } from './game';

class Render {
  static renderGameboards() {
    const { gameBoard } = gameboardHuman;
    console.log(gameboardHuman);
    const divHuman = document.getElementById('gameboard-human');
    const divComputer = document.getElementById('gameboard-computer');
    for (let i = 0; i < gameBoard.length; i++) {
      for (let j = 0; j < gameBoard[i].length; j++) {
        const cell = document.createElement('div');
        cell.setAttribute('player', gameboardHuman.player);
        cell.setAttribute('y-position', i);
        cell.setAttribute('x-position', j);
        cell.classList.add('cell');
        divHuman.appendChild(cell);
      }
    }
    for (let i = 0; i < gameBoard.length; i++) {
      for (let j = 0; j < gameBoard[i].length; j++) {
        const cell = document.createElement('div');
        cell.setAttribute('player', gameboardComputer.player);
        cell.setAttribute('y-position', i);
        cell.setAttribute('x-position', j);
        cell.addEventListener('click', (e) => this.inputAttack(e));
        cell.classList.add('cell-computer');
        divComputer.appendChild(cell);
      }
    }
  }

  static inputAttack(e) {
    const cellClicked = e.target;
    const yPosition = cellClicked.getAttribute('y-position');
    const xPosition = cellClicked.getAttribute('x-position');
    if (
      typeof gameboardComputer.gameBoard[yPosition][xPosition] === 'string' ||
      gameboardComputer.gameBoard[yPosition][xPosition] === 0
    ) {
      humanPlayer.attackEnemy(yPosition, xPosition, gameboardComputer);
      computerPlayer.randomMove(gameboardHuman);
    }
  }

  static changeColorMissed(xPosition, yPosition, gameBoard) {
    const cellClicked = document.querySelector(
      `[x-position="${xPosition}"][y-position="${yPosition}"][player="${gameBoard}"]`
    );
    cellClicked.classList.add('missed-cell');
  }

  static changeColorHit(xPosition, yPosition, gameBoard) {
    const cellClicked = document.querySelector(
      `[x-position="${xPosition}"][y-position="${yPosition}"][player="${gameBoard}"]`
    );
    cellClicked.classList.add('hit-cell');
  }
}

export { Render };
