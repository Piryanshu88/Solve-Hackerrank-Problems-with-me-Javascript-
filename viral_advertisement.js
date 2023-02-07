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
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function viralAdvertising(n) {
    // Write your code here
    /*
    let n=5 [given]
    
    we have to imitate this --⬇️
     Day  Shared  Liked  Cumulative
      1      5     2       2
      2      6     3       5
      3      9     4       9
      4     12     6      15
      5     18     9      24
      
 ----->day 5th is 24
     */
    
let k=5
let  sum=0
for(let i=0;i<n;i++){
  let ans=Math.floor(k/2)
  sum+=ans
  k=ans*3
}
return sum
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const result = viralAdvertising(n);

    ws.write(result + '\n');

    ws.end();
}
