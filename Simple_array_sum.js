// bolier plate for js starts here
"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}
// bolier plate for js ends here

/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

// actual solution

// In question we have given an array and we have to find the sum of all elements.
// Input :- ar=[1,2,3,4,5]
//Output :-15

// we can run an `for loop` or `while loop` and use mathematical operator inside it but first we have to declare an variable and set it initial value to 0.
function simpleArraySum(ar) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum = sum + ar[i];
  }
  return sum;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arCount = parseInt(readLine().trim(), 10);

  const ar = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arTemp) => parseInt(arTemp, 10));

  const result = simpleArraySum(ar);

  ws.write(result + "\n");

  ws.end();
}
