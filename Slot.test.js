const Card = require('./Card');
const Slot = require('./Slot');
describe('Slot', () => {
  test('test init slot', () => {
    const slot = new Slot();
    expect(slot.cards.length).toBe(0);
  });

  test('test add card to slot', () => {
    const slot = new Slot();
    const card = new Card();
    slot.addCard(card);
    expect(slot.cards.length).toBe(0);
  });

  test('test should add exactly card in the first what added when slot is empty', () => {
    const slot = new Slot();
    const type = 'A';
    const value = 13;
    const card = new Card(type, value);
    slot.addCard(card);

    expect(slot.cards[0].type).toBe(type);
    expect(slot.cards[0].value).toBe(value);
  });

  test('test should numbers of cards reduce 1 when remove card from slot', () => {
    const slot = new Slot();
    const card = new Card();
    slot.addCard(card);

    slot.removeCard();
    expect(slot.cards.length).toBe(0);
  });

  // dk: nhỏ hơn 1 + khác màu
  test('test not allow add card when same color', () => {
    const slot = new Slot();
    slot.addCard(new Card('A', 13, 'red'));
    slot.addCard(new Card('A', 12, 'red'));
    expect(slot.cards.length).toBe(1);
  });

  test('test not allow add card when new value < 1', () => {
    const slot = new Slot();
    slot.addCard(new Card('A', 13, 'red'));
    slot.addCard(new Card('B', 5, 'black'));
    expect(slot.cards.length).toBe(1);
  });

  test('test not allow card when same type', () => {
    const slot = new Slot();
    slot.addCard(new Card('A', 13, 'red'));
    slot.addCard(new Card('A', 11, 'red'));
    expect(slot.cards.length).toBe(1);
  });

  test('test not allow add card when new value > 1', () => {
    const slot = new Slot();
    slot.addCard(new Card('A', 13, 'red'));
    slot.addCard(new Card('C', 15, 'red'));
    expect(slot.cards.length).toBe(1);
  });

  test('test not allow add card when empty slot and not K', () => {
    const slot = new Slot();
    slot.addCard(new Card('C', 5, 'red'));
    expect(slot.cards.length).toBe(0);
  });
  test('test allow remove 3 cards consecutive ', () => {
    const slot = new Slot();
    slot.addCard(new Card('A', 13, 'red'));
    slot.addCard(new Card('B', 12, 'black'));
    slot.addCard(new Card('C', 11, 'red'));
    slot.addCard(new Card('D', 10, 'black'));

    slot.removeNumberCards(3);
    expect(slot.cards.length).toBe(1);
    expect(slot.cards[0].type).toBe('A');
    expect(slot.cards[0].value).toBe(13);
  });

  test('test not allow add card when new value - prev value > 1 and not same color', () => {
    const slot = new Slot();
    slot.addCard(new Card('A', 13, 'red'));
    slot.addCard(new Card('B', 12, 'black'));
    slot.addCard(new Card('C', 13, 'red'));
    expect(slot.cards.length).toBe(2);
  });

  // Cho phep thêm những la bai bị úp và ở dưới không được có lá bài nào ngửa
  test('test should allow add hidden cards when there is not any revealed cards at the bottom', () => {
    const slot = new Slot();
    slot.addCard(new Card('A', 13, 'red', true));
    slot.addCard(new Card('A', 12, 'red', true));
    expect(slot.cards.length).toBe(2);
  });
  // Không cho phép thêm 1 lá bài úp khi lá cuối đang mở
  test('test should not allow add hidden cards when last card is opened', () => {
    const slot = new Slot();
    slot.addCard(new Card('A', 13, 'red', false));
    slot.addCard(new Card('A', 12, 'red', true));
    expect(slot.cards.length).toBe(1);
  });
  // Slot luôn phải có lá ngửa nếu trong slot vẫn còn lá úp
  test('test should the slot always has the open card', () => {
    const slot = new Slot();
    slot.addCard(new Card('A', 13, 'red', true));
    slot.addCard(new Card('B', 13, 'red', true));
    slot.addCard(new Card('C', 13, 'red', true));
    slot.addCard(new Card('D', 13, 'red', false));
    expect(slot.cards.length).toBe(4);

    slot.removeCard();
    expect(slot.cards.length).toBe(3);
    expect(slot.cards[slot.cards.length - 1].hidden).toBe(false);
  });
});
