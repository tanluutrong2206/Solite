class Slot {
  constructor() {
    this.cards = [];
  }

  addCard(card) {
    this.cards.push(card);
  }

  removeCard() {
    this.cards.pop();
  }
}

module.exports = Slot;
