// boiler plate for js
"use strict";

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
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

// actual code for js  //

function bonAppetit(bill, k, b) {
  // k is the item anna not eat
  // b is the amount we charged
  // we have to find the diff (b - actual amount charge)
  let sum = 0;
  for (let i = 0; i < bill.length; i++) {
    if (i != k) {
      sum = sum + bill[i];
    }
  }
  if (b - sum / 2 == 0) {
    console.log("Bon Appetit");
  } else {
    console.log(b - sum / 2);
  }
}

function main() {
  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(firstMultipleInput[0], 10);

  const k = parseInt(firstMultipleInput[1], 10);

  const bill = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((billTemp) => parseInt(billTemp, 10));

  const b = parseInt(readLine().trim(), 10);

  bonAppetit(bill, k, b);
}
