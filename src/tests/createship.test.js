/* eslint-disable no-undef */
const Ship = require('../ship');

describe('Ship functions', () => {
  let ship;
  beforeEach(() => {
    ship = new Ship(4);
    return ship;
  });

  test('Create a ship with a specific length', () => {
    expect(ship).toEqual({ length: 4, hits: [] });
  });

  test('Hits a ship with the position', () => {
    ship.isHit(3);
    expect(ship.hits).toContain(3);
  });

  test('Check if the ship its sunk', () => {
      ship.isHit(1);
      ship.isHit(2);
      ship.isHit(3);
      ship.isHit(4);
      expect(ship.isSunk()).toBe(true)
  });

  test('Hitting a spot multiples times', () => {
    ship.isHit(1);
    ship.isHit(1);
    ship.isHit(2);
    ship.isHit(2);
    expect(ship.hits).toStrictEqual([1,2])
  })
});
