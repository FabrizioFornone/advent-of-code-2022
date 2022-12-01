const fs = require("fs");

const list = fs.readFileSync("./data/input.txt").toString().split(/\r?\n/);

let highscore = 0;

let sum = 0;

for (let i = 0; i < list.length; i++) {
  const element = parseInt(list[i]);

  if (isNaN(element)) {
    sum = 0;
  } else {
    sum += element;

    if (sum > highscore) highscore = sum;
  }
}

console.log("result:",highscore);
