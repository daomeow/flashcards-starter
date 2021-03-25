const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');


class Game {
  constructor() {
    this.currentRound;
  }
  start() {
    const tempCards = [];
    const currentDeck = new Deck(tempCards);
    
    prototypeQuestions.forEach(cardData => tempCards.push(new Card(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer)));
    this.currentRound = new Round(currentDeck);
    this.printMessage(currentDeck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;