const _ = require('lodash');

const cardTypes = {};

class Card {
  constructor(type = '', value = '') {
    this.type = type;
    this.value = value;
  }
}

class Board {
  constructor() {
    this.cards = [];
    for (let i = 0; i < 52; i++) {
      if (i % 4 === 0) {
        this.cards.push(new Card('A', i));
      } else if (i % 4 === 1) {
        this.cards.push(new Card('B', i));
      } else if (i % 4 === 2) {
        this.cards.push(new Card('C', i));
      } else if (i % 4 === 3) {
        this.cards.push(new Card('D', i));
      }
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
}

module.exports = Board;
