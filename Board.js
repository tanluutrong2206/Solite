const _ = require('lodash');
const Card = require('./Card');
const Slot = require('./Slot');
const SlotResult = require('./SlotResult');

const cardTypes = {};

class Board {
  constructor() {
    this.cards = [];
    this.slots = [];
    this.slotResults = [];

    for (let i = 0; i < 52; i++) {
      if (i % 4 === 0) {
        this.cards.push(new Card('A', i, 'red', true));
      } else if (i % 4 === 1) {
        this.cards.push(new Card('B', i, 'black', true));
      } else if (i % 4 === 2) {
        this.cards.push(new Card('C', i, 'red', true));
      } else if (i % 4 === 3) {
        this.cards.push(new Card('D', i, 'black', true));
      }
    }
    for (let i = 1; i <= 7; i++) {
      this.slots.push(new Slot());
    }

    for (let i = 1; i <= 4; i++) {
      this.slotResults.push(new SlotResult());
    }
  }

  getCardTypes() {
    return [..._.chain(this.cards).groupBy('type').keys().value()];
  }

  getCardsByType(cardType) {
    return this.cards.filter((e) => e.type === cardType).length;
  }

  getSlots() {
    return 7;
  }

  randomNumbers() {
    const uniqRandomNumbers = _.sampleSize(_.range(0, 52), 52);
    return uniqRandomNumbers;
  }
  initSlot() {
    const uniqRandomNumbers = this.randomNumbers();
    for (let i = 0; i < this.slots.length; i++) {
      let tempCards = [];
      for (let j = 0; j <= i; j++) {
        const card = this.cards[uniqRandomNumbers[i * this.slots.length + j]];
        card.hidden = j !== i;
        tempCards.push(card);
      }
      this.slots[i] = new Slot(tempCards);
    }
  }
}

module.exports = Board;
