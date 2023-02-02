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
 * Complete the 'balancedSums' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Here we have find the equilbrium element like 
// let arr=5 6 1 11
// so index 1 has equilbrium
function balancedSums(arr) {
    // Write your code here
    let left=0
    let right=0
    // first adding all element 
    for(let i=0;i<arr.length;i++){
      right+=arr[i]
    }

    for(let i=0;i<arr.length;i++){
        // for checking equilbrium 
      if(left==right-arr[i]){
        return 'YES'
      }
      left+=arr[i]
      right-=arr[i]
    }
    return 'NO'
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);

    for (let TItr = 0; TItr < T; TItr++) {
        const n = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = balancedSums(arr);

        ws.write(result + '\n');
    }

    ws.end();
}
