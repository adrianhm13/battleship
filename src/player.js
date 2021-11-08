/* eslint-disable class-methods-use-this */
import Gameboard from './gameboard';

class Player {
  constructor(playerName) {
    this.playerName = playerName;
  }

  attackEnemy(yPosition, xPosition, enemyGameboard) {
    enemyGameboard.receiveAttack(yPosition, xPosition);
  }

  randomMove(enemyGameboard) {
    const min = 0;
    const max = 11;

    const yPosition = Math.floor(Math.random() * (max - min) + min);
    const xPosition = Math.floor(Math.random() * (max - min) + min);

    if (enemyGameboard.gameBoard[yPosition][xPosition] === 1) {
      this.randomMove(enemyGameboard);
    } else {
      this.attackEnemy(yPosition, xPosition, enemyGameboard);
    }
  }
}

export { Player };
