class Card {
  constructor(type = '', value = '', color = '', hidden = false) {
    this.type = type;
    this.value = value;
    this.color = color;
    this.hidden = hidden;
  }
}

module.exports = Card;
