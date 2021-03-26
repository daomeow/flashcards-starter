const chai = require('chai');
const Round = require('../src/Round');
const Game = require('../src/Game');
const expect = chai.expect;

describe('Game', function() {

  it('should be an instance of Game', function() {
    const game = new Game();

    expect(game).to.be.an.instanceOf(Game);
  });

  it('should keep track of the current round', function() {
    const game = new Game();
    // game.start();
    // expect(game.currentRound).to.be.an.instanceOf(Round);
    expect(game.currentRound).to.equal();
  });
});