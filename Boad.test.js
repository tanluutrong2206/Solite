const Board = require('./Board');
const Card = require('./Card');
const _ = require('lodash');
const { test } = require('@jest/globals');

describe('board', () => {
  let board;

  beforeEach(() => {
    board = new Board();
  });

  //tạo ra bộ bài 52 lá
  test('test create card', () => {
    expect(board.cards.length).toBe(52);
  });

  // phan loai cac con
  test('test cards has 4 types', () => {
    const cardTypes = board.getCardTypes();
    expect(cardTypes).toStrictEqual(['A', 'B', 'C', 'D']);
  });

  // Mỗi loại phải có đủ 13 lá
  test.each([
    ['A', 13],
    ['B', 13],
    ['C', 13],
    ['D', 13],
  ])('test cards has 13 values each type', (cardType, expected) => {
    const cardValues = board.getCardsByType(cardType);
    expect(cardValues).toBe(expected);
  });

  // Khởi tạo 7 slot
  test('test board has 7 slots', () => {
    const board = new Board();
    expect(board.slots.length).toBe(7);
  });

  // Khởi tạo 4 slot result
  test('test board create 4 slot result', () => {
    const board = new Board();
    expect(board.slotResults.length).toBe(4);
  });

  // Chia bài vào slot 1
  test('test add cards into slot 1', () => {
    const board = new Board();

    board.initSlot();
    const slot1 = board;
    expect(board.slots[0].cards.length).toBe(1);
    expect(board.slots[0].cards[0].hidden).toBe(false);
  });
  test('test add cards into slot 2', () => {
    const board = new Board();

    board.initSlot();
    expect(board.slots[1].cards.length).toBe(2);
    expect(board.slots[1].cards[0].hidden).toBe(true);
  });
  test('test add cards into slot 7', () => {
    const board = new Board();
    board.initSlot();

    expect(board.slots[6].cards.length).toBe(7);
    expect(board.slots[6].cards[6].hidden).toBe(false);
  });

  test('test add card all not duplicated', () => {
    const board = new Board();
    board.initSlot();
    board.slots.forEach((slot) => {
      const uniqueCards = _.uniq(slot.cards);
      expect(uniqueCards.length).toBe(slot.cards.length);
    });
  });

  test('test random cards not duplicate', () => {
    const board = new Board();

    const result = board.randomNumbers();
    const unique = _.uniq(result);
    expect(unique.length).toBe(result.length);
    expect(unique.length).toBe(52);
    expect(_.max(unique)).toBe(51);
    expect(_.min(unique)).toBe(0);
  });
});
