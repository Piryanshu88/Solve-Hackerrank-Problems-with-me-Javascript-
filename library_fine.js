// boiler plate for js 
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'libraryFine' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d1
 *  2. INTEGER m1
 *  3. INTEGER y1
 *  4. INTEGER d2
 *  5. INTEGER m2
 *  6. INTEGER y2
 */

function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
    // we have given the fee structure so i am using if else condition for this 
    
  if (y1 < y2) {
    return 0
  } else if (y1 == y2) {
    if (m1 < m2) {
      return 0
    } else if (m1 == m2) {
      if (d1 <= d2) {
        return 0
      } else {
        return Math.floor(d1 - d2) * 15
      }
    } else {
      return Math.floor(m1 - m2) * 500
    }
  } else {
    return Math.floor(y1 - y2) * 10000
  }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const d1 = parseInt(firstMultipleInput[0], 10);

    const m1 = parseInt(firstMultipleInput[1], 10);

    const y1 = parseInt(firstMultipleInput[2], 10);

    const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const d2 = parseInt(secondMultipleInput[0], 10);

    const m2 = parseInt(secondMultipleInput[1], 10);

    const y2 = parseInt(secondMultipleInput[2], 10);

    const result = libraryFine(d1, m1, y1, d2, m2, y2);

    ws.write(result + '\n');

    ws.end();
}
