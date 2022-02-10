const SlotResult = require('./SlotResult');
const Card = require('./Card');

describe('Slot result', () => {
  test('init slot result', () => {
    const slot = new SlotResult();
    expect(slot.cards.length).toBe(0);
  });

  // CHo phép thêm 1 lá vào - khi slot rỗng
  test('should add card successful', () => {
    const slot = new SlotResult();
    slot.add(Card());

    expect(slot.cards.length).toBe(1);
  });
});
