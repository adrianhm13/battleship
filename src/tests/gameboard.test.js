/* eslint-disable no-undef */
import { Gameboard } from '../gameboard'
// const Gameboard = require('../gameboard');

describe('Gameboard functions', () => {
  let gameBoard = new Gameboard();
  beforeEach(() => {
    gameBoard = new Gameboard();
    return gameBoard;
  });

  test('Place a ship with a specific length (vertical) in the gameboard', () => {
    expect(gameBoard.placeShip('battleship', 0, 0, 'vertical')).toStrictEqual([
      ['battleship', 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ['battleship', 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ['battleship', 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ['battleship', 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  test('Place a ship with a specific length (horizontal) in the gameboard', () => {
    expect(gameBoard.placeShip('battleship', 3, 1, 'horizontal')).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'battleship', 'battleship', 'battleship', 'battleship', 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  // Prepare gameboard for test hit

  const gameBoardTestHit = new Gameboard();



  gameBoardTestHit.placeShip('battleship', 3, 1, 'horizontal')
  test('Hit a ship', () => {
    expect(gameBoardTestHit.receiveAttack(1, 4)).toBe(gameBoardTestHit.ships[0].hits[0]);
  });
});
