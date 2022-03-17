class Slot {
  constructor(cards = []) {
    this.cards = cards;
  }

  addCard(card) {
    const lastCard = this.getLastCard();
    if (card.hidden && (this.cards.length == 0 || lastCard.hidden)) {
      this.cards.push(card);
      return;
    }

    if (this.cards.length > 0) {
      const prev_card = lastCard;
      if (
        (card.color !== prev_card.color &&
          card.value === prev_card.value - 1) ||
        lastCard.hidden
      ) {
        this.cards.push(card);
      }
    } else if (card.value === 13) {
      this.cards.push(card);
    }
  }

  addCards(cards) {
    cards.forEach((card) => {
      this.addCard(card);
    });
  }

  removeCard() {
    const card = this.getLastCard();
    if (card && !card.hidden) {
      this.cards.pop();
      const lastCard = this.cards[this.cards.length - 1];
      lastCard.hidden = false;
    }
  }

  getLastCard() {
    return this.cards[this.cards.length - 1];
  }

  removeNumberCards(number) {
    const cardOpens = this.cards.filter((card) => card.hidden === false);

    if (cardOpens.length < number) {
      return;
    }

    if (this.cards.length > number) {
      this.cards = this.cards.slice(0, this.cards.length - number);
    }
  }
}

module.exports = Slot;
