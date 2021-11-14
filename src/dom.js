/* eslint-disable no-plusplus */
import { Gameboard } from './gameboard';
import { Player } from './player';
import { humanPlayer, computerPlayer, gameboardHuman, gameboardComputer } from './game';

class Render {
  static renderGameboards() {
    const { gameBoard } = gameboardHuman;
    const divHuman = document.getElementById('gameboard-human');
    const divComputer = document.getElementById('gameboard-computer');
    for (let i = 0; i < gameBoard.length; i++) {
      for (let j = 0; j < gameBoard[i].length; j++) {
        const cellHuman = document.createElement('div');
        const cellComputer = document.createElement('div');
        cellHuman.setAttribute('player', gameboardHuman.player);
        cellHuman.setAttribute('y-position', i);
        cellHuman.setAttribute('x-position', j);

        cellComputer.setAttribute('player', gameboardComputer.player);
        cellComputer.setAttribute('y-position', i);
        cellComputer.setAttribute('x-position', j);

        cellComputer.addEventListener('click', (e) => this.inputAttack(e));

        cellHuman.classList.add('cell');
        cellComputer.classList.add('cell-computer');

        divHuman.appendChild(cellHuman);
        divComputer.appendChild(cellComputer);
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

  static menuPlaceShips() {
    const shipsInfo = [
      { type: 'carrier', length: 5 },
      { type: 'battleship', length: 4 },
      { type: 'destroyer', length: 3 },
      { type: 'submarine', length: 3 },
      { type: 'patrol', length: 2 },
    ];
    const { gameBoard } = gameboardHuman;
    const divGameboard = document.getElementById('copy-gameboard');
    for (let i = 0; i < gameBoard.length; i++) {
      for (let j = 0; j < gameBoard[i].length; j++) {
        const cell = document.createElement('div');
        cell.setAttribute('y-position', i);
        cell.setAttribute('x-position', j);

        cell.addEventListener('mouseover', (e) => this.mouseOverPlacing(e, shipsInfo));

        cell.classList.add('cell-computer');

        divGameboard.appendChild(cell);
      }
    }
  }
  
  static mouseOverPlacing(e, shipsInfo){
    console.log(e)
    console.log(shipsInfo);
  }
}

export { Render };
