/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { Ship } from './ship';

class Gameboard {
  constructor() {
    this.gameBoard = [
      // States: 0 - empty, 1 - ship, 2 - hit, 3 - missed
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
    ship.coordinates = []
    this.ships.push(ship);
    console.log(this.ships);
    if (align === 'vertical') {
      for (let i = 0; i < length; i++) {
        ship.coordinates.push({'row': yPosition, 'column': xPosition})
        this.gameBoard[yPosition][xPosition] = typeShip;
        yPosition += 1;
        console.table(this.gameBoard);
      }
    } else if (align === 'horizontal') {
      for (let i = 0; i < length; i++) {
        ship.coordinates.push({'row': yPosition, 'column': xPosition})
        this.gameBoard[yPosition][xPosition] = typeShip;
        xPosition += 1;
        console.table(this.gameBoard);
      }
    }
    return this.gameBoard;
  }

  receiveAttack(xPosition, yPosition) {
    if (this.gameBoard[yPosition][xPosition] !== 0) {
      const typeShip = this.gameBoard[yPosition][xPosition];

      const ship = this.ships.find((element) => element.type === typeShip);

      this.ships[0].isHit(1);
      console.log(ship);
    }
  }
}

export { Gameboard };
// eslint-disable-next-line no-undef
// module.exports = Gameboard;
