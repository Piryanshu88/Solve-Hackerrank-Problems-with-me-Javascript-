// boiler playe for js 
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
 * Complete the 'maximumToys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY prices
 *  2. INTEGER k
 */

function maximumToys(prices, k) {
    // Write your code here
    prices.sort((a,b)=>a-b)
    let sum=0
    let i=0
    let count=0
    while(i<prices.length&&k-prices[i]>=0){
      k-=prices[i]
      count++
      i++
    }
    return count

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const prices = readLine().replace(/\s+$/g, '').split(' ').map(pricesTemp => parseInt(pricesTemp, 10));

    const result = maximumToys(prices, k);

    ws.write(result + '\n');

    ws.end();
}
