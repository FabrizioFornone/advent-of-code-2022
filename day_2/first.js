const fs = require("fs");

const input = fs
  .readFileSync("./data/input.txt")
  .toString()
  .split("\n")
  .map((line) => line.split(" "));

let score = 0;

const moves = {
  opponentRock: { letter: "A", value: 1 },
  opponentPaper: { letter: "B", value: 2 },
  opponentScissor: { letter: "C", value: 3 },
  playerRock: { letter: "X", value: 1 },
  playerPaper: { letter: "Y", value: 2 },
  playerScissor: { letter: "Z", value: 3 },
};

for (let i = 0; i < input.length; i++) {
  const element = input[i];
  const opponentMove = element[0];
  const playerMove = element[1];

  let subtotal = 0;

  if (playerMove === moves.playerRock.letter) {
    subtotal += moves.playerRock.value;
  } else if (playerMove === moves.playerPaper.letter) {
    subtotal += moves.playerPaper.value;
  } else {
    subtotal += moves.playerScissor.value;
  }

  if (
    (opponentMove === moves.opponentRock.letter &&
      playerMove === moves.playerPaper.letter) ||
    (opponentMove === moves.opponentPaper.letter &&
      playerMove === moves.playerScissor.letter) ||
    (opponentMove === moves.opponentScissor.letter &&
      playerMove === moves.playerRock.letter)
  ) {
    subtotal += 6;
  } else if (
    (opponentMove === moves.opponentPaper.letter &&
      playerMove === moves.playerRock.letter) ||
    (opponentMove === moves.opponentScissor.letter &&
      playerMove === moves.playerPaper.letter) ||
    (opponentMove === moves.opponentRock.letter &&
      playerMove === moves.playerScissor.letter)
  ) {
    subtotal += 0;
  } else {
    subtotal += 3;
  }

  score += subtotal;
}

console.log("final score:", score);
