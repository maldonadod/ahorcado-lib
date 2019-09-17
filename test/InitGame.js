const newAhorcado = require("../src/newAhorcado");
const newPresenter = require("../src/newPresenter");

function InitGame(params) {
  const view = {
    attach: jest.fn(() => jest.fn()),
    showGame: jest.fn(),
    showWinningGame: jest.fn(),
    showGameOver: jest.fn(),
  }
  const game = newAhorcado(params)
  const presenter = newPresenter(view);
  presenter.whenUserAttemptsToGuessLetter(letter => game.tryLetter(letter, presenter))

  game.render(presenter)

  return {
    verify: (callback) => callback(presenter, view)
  }
}
module.exports = InitGame;