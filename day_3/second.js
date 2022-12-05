const fs = require("fs");

const input = fs.readFileSync("./data/input.txt").toString().split("\n");

const chunkArray = (array, chunk_size) => {
  const tempArray = [];

  for (let i = 0; i < array.length; i += chunk_size) {
    const myChunk = array.slice(i, i + chunk_size);
    tempArray.push(myChunk);
  }

  return tempArray;
};

const chunkArrayList = chunkArray(input, 3);

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

const findSameCharacter = (firstString, secondString, thirdString) => {
  let found;

  [...firstString].forEach((element) => {
    if (
      secondString.includes(element) &&
      thirdString.includes(element) &&
      found !== element
    ) {
      found = element;
    }
  });
  return found;
};

const foundArray = [];

chunkArrayList.forEach((element) => {
  const [firstString, secondString, thirdString] = element;

  const found = findSameCharacter(firstString, secondString, thirdString);

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
