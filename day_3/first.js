const fs = require("fs");

const input = fs
  .readFileSync("./data/input.txt")
  .toString()
  .split("\n")
  .map((line) => [
    line.substring(0, line.length / 2),
    line.substring(line.length / 2),
  ]);

const lowerAlphabet = Array.from(Array(26))
  .map((e, i) => i + 97)
  .map((x) => String.fromCharCode(x));

const upperAlphabet = Array.from(Array(26))
  .map((e, i) => i + 65)
  .map((x) => String.fromCharCode(x));

const completeAlphabet = [...lowerAlphabet, ...upperAlphabet];

const alphabethValue = [];

completeAlphabet.forEach((element, i) => {
  alphabethValue.push({ letter: element, value: i + 1 });
});

const findSameCharacter = (firstString, secondString) => {
  let found;

  [...firstString].forEach((element) => {
    if (secondString.includes(element) && found !== element) {
      found = element;
    }
  });
  return found;
};

const foundArray = [];

input.forEach((element) => {
  const [firstHalf, secondHalf] = element;

  const found = findSameCharacter(firstHalf, secondHalf);

  foundArray.push(found);
});

let sum = 0;

foundArray.forEach((letter) => {
  alphabethValue.forEach((priority) => {
    if (letter === priority.letter) {
      sum += priority.value;
    }
  });
});

console.log("result:", sum);
