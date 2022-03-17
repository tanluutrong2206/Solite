class SlotResult {
  constructor() {
    this.cards = [];
  }

  add(card) {
    if (card.hidden) {
      return;
    }
    const lastCard = this.cards[this.cards.length - 1];
    if (
      lastCard &&
      lastCard.value === card.value - 1 &&
      lastCard.color === card.color &&
      lastCard.type === card.type
    ) {
      this.cards.push(card);
    } else if (!lastCard && card.value === 1) {
      this.cards.push(card);
    }
  }

  withdraw() {
    this.cards.pop();
  }
}

module.exports = SlotResult;
