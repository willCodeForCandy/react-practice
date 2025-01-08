import { deriveActivePlayer, deriveWinner } from './gameLogic';

// Mock de datos
const mockGameTurns = [
  { player: 'X', rowIndex: 0, colIndex: 0 },
  { player: 'O', rowIndex: 1, colIndex: 1 },
];
const mockPlayers = { X: 'Player 1', O: 'Player 2' };
const mockGameBoard = [
  ['X', null, null],
  [null, 'O', null],
  [null, null, null],
];

const winningBoard = [
  ['X', 'X', 'X'],
  [null, 'O', null],
  [null, null, 'O'],
];

describe('deriveActivePlayer', () => {
  test("should return 'X' for the first turn", () => {
    expect(deriveActivePlayer([])).toBe('X');
  });

  test("should return 'O' if the last move was 'X'", () => {
    expect(deriveActivePlayer(mockGameTurns)).toBe('O');
  });
});

describe('deriveWinner', () => {
  test('should return undefined if there is no winner', () => {
    expect(deriveWinner(mockPlayers, mockGameBoard)).toBeUndefined();
  });

  test('should return Player 1 if X has a winning combination', () => {
    expect(deriveWinner(mockPlayers, winningBoard)).toBe('Player 1');
  });
});
