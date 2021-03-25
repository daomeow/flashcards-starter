const chai = require('chai');
const Deck = require('../src/Deck');
const expect = chai.expect;
const Round = require('../src/Round');

describe('Round', function() {

  it.skip('should take in responses', function() {
    const deck = new Deck();
    const round = new Round(deck);

    expect(round.deck).to.deep.equal(deck);
  });

  it.skip('should return the current card being played', function() {
    const deck = new Deck();
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.deep.equal(2, 'How many hearts do octopuses have?', [1, 2, 3], 3);
  });

  it.skip('should count each guess as a turn', function() {
    const deck = new Deck();
    const round = new Round(deck);

    expect(round.turns).to.deep.equal(0);

    round.takeTurn();

    expect(round.turns).to.deep.equal(1);
  }); 

  it.skip('should record incorrect guesses', function() {
    const deck = new Deck();
    const round = new Round(deck);

    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it.skip('should calculate the percentage of correct guesses', function() {
    const deck = new Deck();
    const round = new Round(deck);

    expect(round.calculatePercentCorrect).to.deep.equal(100);
  });
});