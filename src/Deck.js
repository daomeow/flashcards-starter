class Deck {
  constructor(cards) {
    this.cards = cards || [];
  }

  countCards() {
    console.log(typeof(this.cards))
    return this.cards.length;
  }
}

module.exports = Deck;