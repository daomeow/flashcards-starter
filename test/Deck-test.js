const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;
const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should initialize an array of card objects', function() {
    const card = new Card(2, 'How many hearts do octopuses have?', [1, 2, 3], 3);
    const deck = new Deck(card);

    expect(deck.cards).to.deep.equal([card]);
  });

  it('should know how many cards are in the deck', function() {
    const card = new Card(2, 'How many hearts do octopuses have?', [1, 2, 3], 3);
    const deck = new Deck(card);

    expect(deck.countCards()).to.deep.equal(1);
  });
});