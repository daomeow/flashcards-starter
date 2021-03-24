const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should accept a guess and cards', function() {
    const card = new Card()
    const turn = new Turn('pug', card);
    
    expect(turn.guess).to.equal('pug');
    expect(turn.card).to.equal(card);
  })
});