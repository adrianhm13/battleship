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
      { type: 'carrier', length: 5, align: 'vertical' },
      { type: 'battleship', length: 4, align: 'vertical' },
      { type: 'destroyer', length: 3, align: 'vertical' },
      { type: 'submarine', length: 3, align: 'vertical' },
      { type: 'patrol', length: 2, align: 'vertical' },
    ];
    const { gameBoard } = gameboardHuman;
    const divGameboard = document.getElementById('copy-gameboard');
    const buttonChangeAlign = document.getElementById('change-align');
    buttonChangeAlign.addEventListener('click', () => this.changeAlign(shipsInfo));
    for (let i = 0; i < gameBoard.length; i++) {
      for (let j = 0; j < gameBoard[i].length; j++) {
        const cell = document.createElement('div');
        cell.setAttribute('y-position', i);
        cell.setAttribute('x-position', j);
        cell.classList.add('cell-computer');
        cell.addEventListener('mouseover', (e) => this.mouseOverPlacing(e, shipsInfo));
        cell.addEventListener('mouseleave', (e) => this.mouseLeavePlacing(e, shipsInfo));
        cell.addEventListener('click', (e) => {this.placeShipDom(e, shipsInfo)})
        divGameboard.appendChild(cell);
      }
    }
  }

  static changeAlign(shipsInfo) {
    if (shipsInfo[0].align === 'vertical') {
      shipsInfo[0].align = 'horizontal';
    } else {
      shipsInfo[0].align = 'vertical';
    }
  }

  static mouseOverPlacing(e, shipsInfo) {
    // Get the gameboard and if its set up to vertical or horizontal, take ship's length and
    // make a for loop (X or Y)  to get the div and change color
    console.log(e);
    console.log(shipsInfo);
    console.log(shipsInfo);
    const shipLength = shipsInfo[0].length;
    let xPosition = Number(e.target.getAttribute('x-position'));
    let yPosition = Number(e.target.getAttribute('y-position'));
    console.log(`xPosition: ${xPosition}`)
    console.log(`yPosition: ${yPosition}`);
    for (let i = 0; i < shipLength; i++) {
      const cellHover = document.querySelector(
        `[x-position="${xPosition}"][y-position="${yPosition}"]`
      );
      if (xPosition < 10 && yPosition < 10) {
        if (shipsInfo[0].align === 'vertical') {
          yPosition += 1;
        } else {
          xPosition += 1;
        }
        cellHover.classList.add('hit-cell');
      } else {
        const divGameboard = document.getElementById('copy-gameboard')
        divGameboard.classList.add('hit-forbidden');
      }
    }
  }

  static placeShipDom(e, shipsInfo){
    const xPosition = Number(e.target.getAttribute('x-position'));
    const yPosition = Number(e.target.getAttribute('y-position'));
    console.log(shipsInfo[0].align)
    console.log(xPosition, yPosition)
    if(gameboardHuman.placeShip(shipsInfo[0].type, xPosition, yPosition, shipsInfo[0].align) === true){
      shipsInfo.shift()
    }


  }

  static mouseLeavePlacing(e, shipsInfo) {
    const shipLength = shipsInfo[0].length;
    let xPosition = Number(e.target.getAttribute('x-position'));
    let yPosition = Number(e.target.getAttribute('y-position'));
    for (let i = 0; i < shipLength; i++) {
      const cellHover = document.querySelector(
        `[x-position="${xPosition}"][y-position="${yPosition}"]`
      );
      if (cellHover !== null) {
        if (shipsInfo[0].align === 'vertical') {
          yPosition += 1;
        } else {
          xPosition += 1;
        }
        cellHover.classList.toggle('hit-cell');
      } else {
        const divGameboard = document.getElementById('copy-gameboard')
        
        divGameboard.classList.toggle('hit-forbidden');
        console.log(divGameboard)
      }
    }
  }
}

export { Render };
