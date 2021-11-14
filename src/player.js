/* eslint-disable class-methods-use-this */
import Gameboard from './gameboard';

class Player {
  constructor(playerName) {
    this.playerName = playerName;
  }

  attackEnemy(yPosition, xPosition, enemyGameboard) {
    if(enemyGameboard.receiveAttack(yPosition, xPosition)){return true}
    return false;
  }

  randomMove(enemyGameboard) {
    const min = 0;
    const max = 10;

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
