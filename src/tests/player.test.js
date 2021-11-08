/* eslint-disable no-undef */
import { Player } from '../player';

describe('Players functions', () => {
  let player1;
  let player2;
  beforeEach(() => {
    player1 = new Player('human');
    player1.playerTurn = true;
    
    player2 = new Player('computer');
  });

  test('Create new player', () => {
    expect(player1.playerName).toBe('human');
  });

  test('Create AI', () => {
    expect(player2.playerName).toBe('computer');
  });
});
