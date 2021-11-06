/* eslint-disable no-undef */
import { Ship } from '../ship'
// const Ship = require('../ship');

describe('Ship functions', () => {
  let ship;
  beforeEach(() => {
    ship = new Ship(4);
    return ship;
  });

  test('Create a ship with a specific length', () => {
    expect(ship).toEqual({ length: 4, hits: [], sunk: false });
  });

  test('Hits a ship with the position', () => {
    ship.isHit(3);
    expect(ship.hits).toContain(3);
  });

  test('Check if the ship its sunk', () => {
      ship.isHit(0);
      ship.isHit(1);
      ship.isHit(2);
      ship.isHit(3);
      expect(ship.sunk).toBe(true)
  });

  test('Hitting a spot multiples times', () => {
    ship.isHit(1);
    ship.isHit(1);
    ship.isHit(2);
    ship.isHit(2);
    expect(ship.hits).toStrictEqual([1,2])
  })
});
