const randomWord = require("random-words-es");
const removeTildes = require("./removeTildes");

function getRandomSpanishWord() {
  return removeTildes(randomWord())
}

module.exports = getRandomSpanishWord;