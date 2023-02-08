"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "" ;
let currentLine = 0 ;

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
 * Complete the 'permutationEquation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY p as parameter.
 */

function permutationEquation(p) {
  // Write your code here
  // we have to find any interger y that p(p(y))==x
  // then we have to return an array
  let result = [];
  let i = 1;
  while (i <= p.length) {
    for (let j = 0; j < p.length; j++) {
      if (i == p[j]) {
        result.push(p.indexOf(j + 1) + 1);
        i++;
      }
    }
  }
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const p = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((pTemp) => parseInt(pTemp, 10));

  const result = permutationEquation(p);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
