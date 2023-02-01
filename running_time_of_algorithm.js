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
 * Complete the 'runningTime' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// this is the excat code for bubble sort algo 
// i am just counting the number of swaps 
function runningTime(array) {
    // Write your code here
    let c=0
    let n=array.length
for (let i = 0;i<n-1;i++){
        for (let j = 0;j<n-i-1;j++){
            if (array[j] > array[j + 1]) {
              swap(array,j,j+1)
              c++
            }
        }
    }
  return c
}
function swap(arr,i,j){
  while(i<j){
    [arr[i],arr[j]]=[arr[j],arr[i]]
    i++
    j--
  }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = runningTime(arr);

    ws.write(result + '\n');

    ws.end();
}
