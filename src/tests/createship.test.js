/* eslint-disable no-undef */
const Ship = require('../ship');

describe('Ship functions', () => {
    let ship: Ship
    
  beforeEach(() => {
    const ship = new Ship(4);
    return ship;
  });

  test('Create a ship with a specific length', () => {
    expect(ship).toEqual((ship.length = 3));
  });
});
