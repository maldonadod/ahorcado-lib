const randomWords = require("random-spanish-words");
const removeTildes = require("./removeTildes");

function getRandomSpanishWord() {
  return removeTildes(randomWords())
}

module.exports = getRandomSpanishWord;