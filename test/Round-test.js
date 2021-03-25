const chai = require('chai');
const Deck = require('../src/Deck');
const expect = chai.expect;
const Round = require('../src/Round');

describe('Round', function() {

  it('should take in responses', function() {
    const deck = new Deck();
    const round = new Round(deck);

    expect(round.deck).to.deep.equal(deck);
  });

  it('should return the current card being played', function() {
    const deck = new Deck();
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.deep.equal();
  });
});