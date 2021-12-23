import Slot from './Slot';
import Card from './Card';
describe('Slot', () => {
  test('test init slot', () => {
    const slot = new Slot();
    expect(slot.cards.length).toBe(0);
  });

  test('test add card to slot', () => {
    const slot = new Slot();
    const card = new Card();
    slot.addCard(card);
    expect(slot.cards.length).toBe(1);
  });

  test('test should add exactly card in the first what added when slot is empty', () => {
    const slot = new Slot();
    const type = 'A';
    const value = 1;
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

  test('test allow add card', () => {
    const slot = new Slot();
    slot.addCard(new Card('A', 2));
    slot.addCard(new Card('A', 1));
    expect(slot.cards.length).toBe(2);
  });
});
