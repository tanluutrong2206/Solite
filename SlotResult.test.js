const SlotResult = require('./SlotResult');
const Card = require('./Card');

describe('Slot result', () => {
  test('init slot result', () => {
    const slot = new SlotResult();
    expect(slot.cards.length).toBe(0);
  });

  // Chỉ Cho phép thêm con xì - khi slot rỗng
  test('should add card successful', () => {
    const slot = new SlotResult();
    slot.add(new Card('A', 13, 'red'));

    expect(slot.cards.length).toBe(0);
  });

  test('should add 1 card successful', () => {
    const slot = new SlotResult();
    slot.add(new Card('A', 1, 'red'));

    expect(slot.cards.length).toBe(1);
  });

  //  khong the them card khi lớn hơn 2
  test('should  not allow add 1 card s better than before carduccessful', () => {
    const slot = new SlotResult();
    slot.add(new Card('A', 1, 'red'));
    slot.add(new Card('A', 3, 'red'));

    expect(slot.cards.length).toBe(1);
  });

  //  Cho them 1 the khi con kế là con xì
  test('should add 1 card s better than before carduccessful', () => {
    const slot = new SlotResult();
    slot.add(new Card('A', 1, 'red'));
    slot.add(new Card('A', 2, 'red'));

    expect(slot.cards.length).toBe(2);
  });
  //  Khong them the khi the moi khac mau
  test('should not add card when new card in other color with previous', () => {
    const slot = new SlotResult();
    slot.add(new Card('A', 1, 'red'));
    slot.add(new Card('B', 2, 'black'));

    expect(slot.cards.length).toBe(1);
  });

  //  Khong them the khi the moi khác loai
  test('should not add card when new card in other type with previous', () => {
    const slot = new SlotResult();
    slot.add(new Card('A', 1, 'red'));
    slot.add(new Card('C', 2, 'red'));

    expect(slot.cards.length).toBe(1);
  });

  // Khong the them card khi con goi y chua mo
  test('should not allow add card hidden', () => {
    const slot = new SlotResult();
    slot.add(new Card('A', 1, 'red', (hidden = true)));

    expect(slot.cards.length).toBe(0);
  });
  // khong the them card khi cung màu + cung loại + chua mở
  test('should not allow add card hidden1', () => {
    const slot = new SlotResult();
    slot.add(new Card('A', 1, 'red'));
    slot.add(new Card('A', 2, 'red', true));

    expect(slot.cards.length).toBe(1);
  });

  // chỉ có thể rút lá bài cuối cùng ra khỏi slot
  test('should allow to withdraw last card', () => {
    const slot = new SlotResult();
    slot.add(new Card('A', 1, 'red'));
    slot.add(new Card('A', 2, 'red'));
    slot.add(new Card('A', 3, 'red'));
    slot.add(new Card('A', 4, 'red'));

    slot.withdraw();

    expect(slot.cards.length).toBe(3);

    const lastCard = slot.cards[slot.cards.length - 1];
    expect(lastCard.value).toBe(3);
  });
});
