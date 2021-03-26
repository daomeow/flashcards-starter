const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    // let currentCard = this.deck.cards.shift();
    // return currentCard;
    return this.deck.cards[0];
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