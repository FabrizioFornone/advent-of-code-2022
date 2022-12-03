const fs = require("fs");

const input = fs
  .readFileSync("./data/input.txt")
  .toString()
  .split("\n")
  .map((line) => line.split(" "));

const moves = {
  opponentRock: { letter: "A", value: 1 },
  opponentPaper: { letter: "B", value: 2 },
  opponentScissor: { letter: "C", value: 3 },
  playerRock: { letter: "X", value: 1 },
  playerPaper: { letter: "Y", value: 2 },
  playerScissor: { letter: "Z", value: 3 },
};

let score = 0;

input.forEach((element) => {
  const [opponentMove, playerMove] = element;

  if (playerMove === moves.playerRock.letter) {
    score += moves.playerRock.value;
  } else if (playerMove === moves.playerPaper.letter) {
    score += moves.playerPaper.value;
  } else {
    score += moves.playerScissor.value;
  }

  if (
    (opponentMove === moves.opponentRock.letter &&
      playerMove === moves.playerPaper.letter) ||
    (opponentMove === moves.opponentPaper.letter &&
      playerMove === moves.playerScissor.letter) ||
    (opponentMove === moves.opponentScissor.letter &&
      playerMove === moves.playerRock.letter)
  ) {
    score += 6;
  } else if (
    (opponentMove === moves.opponentPaper.letter &&
      playerMove === moves.playerRock.letter) ||
    (opponentMove === moves.opponentScissor.letter &&
      playerMove === moves.playerPaper.letter) ||
    (opponentMove === moves.opponentRock.letter &&
      playerMove === moves.playerScissor.letter)
  ) {
    score += 0;
  } else {
    score += 3;
  }
});

console.log("final score:", score);
