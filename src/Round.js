class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    let currentCard = this.deck.cards.shift();
    return currentCard;
  }
  takeTurn(guess) {
    let currentCard = this.returnCurrentCard();
    this.turns++;
    
    if(guess === currentCard.correctAnswer) {
      return 'correct!';
    } else {
      this.incorrectGuesses.push(currentCard.id);
      return 'incorrect!';
    }
  }
}

module.exports = Round;