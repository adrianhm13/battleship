/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { Ship } from './ship';

class Gameboard {
  constructor() {
    this.gameBoard = [
      // States: 0 - empty, 1 - already attacked
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.ships = [];
    this.missedShots = [];
  }

  placeShip(typeShip, xPosition, yPosition, align) {
    let length;
    // eslint-disable-next-line default-case
    switch (typeShip) {
      case 'carrier':
        length = 5;
        break;

      case 'battleship':
        length = 4;
        break;

      case 'destroyer':
        length = 3;
        break;

      case 'submarine':
        length = 3;
        break;

      case 'patrol':
        length = 2;
        break;
    }
    const ship = new Ship(length);
    ship.type = typeShip;
    ship.coordinates = [];
    this.ships.push(ship);
    if (align === 'vertical') {
      for (let i = 0; i < length; i++) {
        ship.coordinates.push({ row: yPosition, column: xPosition });
        this.gameBoard[yPosition][xPosition] = typeShip;
        yPosition += 1;
      }
    } else if (align === 'horizontal') {
      for (let i = 0; i < length; i++) {
        ship.coordinates.push({ row: yPosition, column: xPosition });
        this.gameBoard[yPosition][xPosition] = typeShip;
        xPosition += 1;
      }
    }
    return this.gameBoard;
  }

  receiveAttack(yPosition, xPosition) {

    if (!this.checkPositionAttacked(yPosition, xPosition)) {
      if (typeof this.gameBoard[yPosition][xPosition] === 'string') {
        const typeShip = this.gameBoard[yPosition][xPosition];
        const ship = this.ships.find((element) => element.type === typeShip);
        const positionHit = ship.coordinates.findIndex(
          (coordinate) => coordinate.row === yPosition && coordinate.column === xPosition
        );
        ship.isHit(positionHit);
        return positionHit;
      }
      this.allShipsSunk();
    }
  }

  checkPositionAttacked(yPosition, xPosition) {
    if (this.gameBoard[yPosition][xPosition] === 0) {
      this.gameBoard[yPosition][xPosition] = 1
      console.log('works')
      this.missedShots.push({ row: yPosition, column: xPosition });
      return this.missedShots
    }

    
    
  }

  allShipsSunk() {
    const allIsSunk = this.ships.every((ship) => ship.sunk === true);
    return allIsSunk;
  }
}

export { Gameboard };
// eslint-disable-next-line no-undef
// module.exports = Gameboard;
