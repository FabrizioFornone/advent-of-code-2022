const fs = require("fs");

const input = fs
  .readFileSync("./data/input.txt")
  .toString()
  .split("\n")
  .map((line) => {
    const index = line.indexOf(",");
    return [line.substring(0, index), line.substring(index + 1)];
  });

const numberListCreator = (inputArray) => {
  const array = [];
  const splittedArray = inputArray.split("-");

  for (
    let i = parseInt(splittedArray[0]);
    i <= parseInt(splittedArray[1]);
    i++
  ) {
    array.push(i);
  }

  return array;
};

const checker = (arr, target) => target.some((v) => arr.includes(v));

let sum = 0;

input.forEach((element) => {
  const [leftSections, rightSections] = element;

  const leftSectionsExploded = numberListCreator(leftSections);

  const rightSectionsExploded = numberListCreator(rightSections);

  if (
    checker(leftSectionsExploded, rightSectionsExploded) ||
    checker(rightSectionsExploded, leftSectionsExploded)
  ) {
    sum += 1;
  }
});

console.log("result:", sum);
