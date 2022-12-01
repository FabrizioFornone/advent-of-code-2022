const fs = require("fs");

const list = fs.readFileSync("./data/input.txt").toString().split(/\r?\n/);

let listOfSums = [];

let sum = 0;

let sumOfTopThree = 0;

for (let i = 0; i < list.length; i++) {
  const element = parseInt(list[i]);

  if (isNaN(element)) {
    listOfSums.push(sum);
    sum = 0;
  } else {
    sum += element;
  }
}

for (let i = 0; i < 3; i++) {
  const maxValue = Math.max(...listOfSums);

  const maxValueIndex = listOfSums.indexOf(Math.max(...listOfSums));

  sumOfTopThree += maxValue;

  listOfSums.splice(maxValueIndex, 1);
}

console.log("result:", sumOfTopThree);
