const fs = require("fs");

const input = fs
  .readFileSync("./data/input.txt")
  .toString()
  .split("\n")
  .map((line) => line.split(" "));

const moves = {
  rock: { opponenLetter: "A", value: 1 },
  paper: { opponenLetter: "B", value: 2 },
  scissor: { opponenLetter: "C", value: 3 },
};

const matchResult = {
  lose: "X",
  draw: "Y",
  win: "Z",
};

let score = 0;

input.forEach((element) => {
  const [opponentMove, playerMove] = element;

  if (playerMove === matchResult.lose) {
    score += 0;

    if (opponentMove === moves.rock.opponenLetter) {
      score += moves.scissor.value;
    } else if (opponentMove === moves.paper.opponenLetter) {
      score += moves.rock.value;
    } else {
      score += moves.paper.value;
    }
  }

  if (playerMove === matchResult.draw) {
    score += 3;

    if (opponentMove === moves.rock.opponenLetter) {
      score += moves.rock.value;
    } else if (opponentMove === moves.paper.opponenLetter) {
      score += moves.paper.value;
    } else {
      score += moves.scissor.value;
    }
  }

  if (playerMove === matchResult.win) {
    score += 6;

    if (opponentMove === moves.rock.opponenLetter) {
      score += moves.paper.value;
    } else if (opponentMove === moves.paper.opponenLetter) {
      score += moves.scissor.value;
    } else {
      score += moves.rock.value;
    }
  }
});

console.log("final score:", score);
