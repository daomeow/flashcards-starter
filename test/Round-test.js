const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const expect = chai.expect;
const Round = require('../src/Round');

describe('Round', function() {

  it('should take in responses', function() {
    const card = new Card(2, 'How many hearts do octopuses have?', [1, 2, 3], 3);
    const deck = new Deck([card]);
    const round = new Round(deck);

    expect(round.deck).to.deep.equal(deck);
  });

  it('should return the current card being played', function() {
    const card = new Card(2, 'How many hearts do octopuses have?', [1, 2, 3], 3);
    const deck = new Deck([card]);
    const round = new Round(deck);
    
    expect(round.returnCurrentCard()).to.deep.equal({id: 2, question: 'How many hearts do octopuses have?', answers: [1, 2, 3], correctAnswer: 3});
  });

  it('should count each guess as a turn', function() {
    const card = new Card(2, 'How many hearts do octopuses have?', [1, 2, 3], 3);
    const deck = new Deck([card]);
    const round = new Round(deck);

    expect(round.turns).to.deep.equal(0);

    round.takeTurn(1);

    expect(round.turns).to.deep.equal(1);
  }); 

  it('should record incorrect guesses', function() {
    const card = new Card(2, 'How many hearts do octopuses have?', [1, 2, 3], 3);
    const deck = new Deck([card]);
    const round = new Round(deck);

    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should calculate the percentage of correct guesses', function() {
    const card = new Card(2, 'How many hearts do octopuses have?', [1, 2, 3], 3);
    const deck = new Deck([card]);
    const round = new Round(deck);

    round.takeTurn(3);

    expect(round.calculatePercentCorrect()).to.deep.equal(100);
  });

  it('should print a message at the end of the round', function() {
    const card = new Card(2, 'How many hearts do octopuses have?', [1, 2, 3], 3);
    const deck = new Deck([card]);
    const round = new Round(deck);

    round.takeTurn(3);
    round.calculatePercentCorrect();

    expect(round.endRound()).to.deep.equal('** Round over!** You answered 100% of the questions correctly!');
  });
});