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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

// actual code
// here we have given an 2D arr and we have to find the diff of diagonals
function diagonalDifference(arr) {
    // Write your code here
    // first we declare two variable for right and left diagonal
    // and set it initial value to 0
    // if i==j then it make an  right diagonal 
    
    // for left you can do i+j==mat_length 
    let right=0
    let left=0
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(i==j){
                right=right+arr[i][j]
            }
             if(i+j==arr.length-1){
                left=left+arr[i][j]
            }
        }
    }
    return Math.abs(right-left)
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
