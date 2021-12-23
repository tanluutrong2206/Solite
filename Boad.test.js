const Board = require('./Board');
const Slot = require('./Slot');
const _ = require('lodash');
const { test } = require('@jest/globals');

describe('board', () => {
  let board;

  beforeEach(() => {
    board = new Board();
  });

  test('test create card', () => {
    expect(board.cards.length).toBe(52);
  });

  test('test cards has 4 types', () => {
    const cardTypes = board.getCardTypes();
    expect(cardTypes).toStrictEqual(['A', 'B', 'C', 'D']);
  });

  test.each([
    ['A', 13],
    ['B', 13],
    ['C', 13],
    ['D', 13],
  ])('test cards has 13 values each type', (cardType, expected) => {
    const cardValues = board.getCardsByType(cardType);
    expect(cardValues).toBe(expected);
  });

  test.skip('test board has 7 slots', () => {
    const slots = board.getSlots();
    expect(slots).toBe(7);
  });
});
