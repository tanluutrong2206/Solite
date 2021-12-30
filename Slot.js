class Slot {
  constructor() {
    this.cards = [];
  }

  addCard(card) {
    if (this.cards.length > 0) {
      const prev_card = this.cards[this.cards.length - 1];
      if (
        card.color !== prev_card.color &&
        card.value === prev_card.value - 1
      ) {
        this.cards.push(card);
      }
    } else if (card.value === 13) {
      this.cards.push(card);
    }
  }

  removeCard() {
    this.cards.pop();
  }

  removeNumberCards(number) {
    if (this.cards.length > number) {
      this.cards = this.cards.slice(0, this.cards.length - number);
    }
  }
}

module.exports = Slot;
