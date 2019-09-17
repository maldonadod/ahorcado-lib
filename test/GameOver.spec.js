const InitGame = require("./InitGame");

test("Game over when user fails 5 times", testGameOver)

function testGameOver() {

  InitGame({
    secretWord: "guitarra",
    shouldGameOverWhenFailsEquals: 5
  }).verify((presenter, view) => {
    
    presenter.dispatchInputLetter("Q")
    presenter.dispatchInputLetter("Z")
    presenter.dispatchInputLetter("S")
    presenter.dispatchInputLetter("Y")
    presenter.dispatchInputLetter("X")

    expect(view.showGameOver).toHaveBeenCalled()
  })
}