const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;
const Deck = require('../src/Deck');

describe('Deck', function() {

  it.skip('should initialize an array of card objects', function() {
    const card = new Card();
    const deck = new Deck(card);

    expect(deck.cards).to.equal([card]);
  });

  it('should know how many cards are in the deck', function() {
    const card = new Card();
    const deck = new Deck(card);

    expect(deck.countCards()).to.equal(1);
  });
});