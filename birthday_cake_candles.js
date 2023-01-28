// boiler plate for js
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

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

//actual code for problem

function birthdayCakeCandles(candles) {
  // we have to find the max element from candles arr and then count the number of time it occur
  // for this we first find the max element then declare an counter and every time max element appears increment the count of counter 
  // at last return it 
  // Write your code here
  let max = -Infinity;
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    max = Math.max(candles[i], max);
  }
  for (let i = 0; i < candles.length; i++) {
    if (max == candles[i]) {
      count++;
    }
  }
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const candlesCount = parseInt(readLine().trim(), 10);

  const candles = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((candlesTemp) => parseInt(candlesTemp, 10));

  const result = birthdayCakeCandles(candles);

  ws.write(result + "\n");

  ws.end();
}
