const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[0];
  }
  takeTurn(guess) {
    let currentCard = this.returnCurrentCard();
    let turn = new Turn(guess,currentCard);
    
    this.turns++;
    if (!turn.giveFeedback()) {
      this.incorrectGuesses.push(currentCard.id);
    }
    this.deck.cards.shift();
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    let wrongGuessesCount = this.incorrectGuesses.length;
    let correctGuessCount = this.turns - wrongGuessesCount;

    return (correctGuessCount/this.turns) * 100; 
  }
  endRound() {
    let correctPercentage = this.calculatePercentCorrect();
    
    return `** Round over!** You answered ${correctPercentage}% of the questions correctly!`;
  }
}

module.exports = Round;