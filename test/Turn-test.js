const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    // const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should accept a guess and cards', function() {
    const card = new Card();
    const turn = new Turn('pug', card);
    
    expect(turn.guess).to.equal('pug');
    expect(turn.card).to.deep.equal(card);
  });

  it('should return the guess', function() {
    const card = new Card(2, 'How many hearts do octopuses have?', [1, 2, 3], 3);
    const turn = new Turn(3, card);

    expect(turn.returnGuess()).to.deep.equal(3);
  });

  it('should return the card', function() {
    const card = new Card(2, 'How many hearts do octopuses have?', [1, 2, 3], 3);
    const turn = new Turn(3, card);

    expect(turn.returnCard()).to.deep.equal(card);
  });

  it('should indicate if the guess matches the correct answer on the card', function() {
    const card = new Card(2, 'How many hearts do octopuses have?', [1, 2, 3], 3);
    const turn = new Turn(3, card);

    expect(turn.evaluateGuess()).to.deep.equal(true);
  });

  it('should give feedback whether the guess is correct or not', function() {
    const card = new Card(2, 'How many hearts do octopuses have?', [1, 2, 3], 3);
    const turn = new Turn(3, card);

    expect(turn.giveFeedback()).to.deep.equal('correct!');
  });
});