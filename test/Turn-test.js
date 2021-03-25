const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

  // it('should be a function', function() {
  //   const turn = new Turn();
  //   expect(Turn).to.be.a('function');
  // });

  it('should accept a guess and cards', function() {
    const card = new Card();
    const turn = new Turn('pug', card);
    
    expect(turn.guess).to.equal('pug');
    expect(turn.card).to.equal(card);
  });

  it('should return the guess', function() {
    const card = new Card();
    const turn = new Turn('pug', card);

    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should return the card', function() {
    const card = new Card();
    const turn = new Turn('pug', card);

    expect(turn.returnCard()).to.equal(card);
  });

  it('should indicate if the guess matches the correct answer on the card', function() {
    const card = new Card();
    const turn = new Turn('pug', card);

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should give feedback whether the guess is correct or not', function() {
    const card = new Card();
    const turn = new Turn('pug', card);

    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});