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



// actual code for js 
// in this question we have to find the median of an array
// first we can sort this array by using inbuilt sort method or you can use your own 
// then just have to do the half of arr length 
// and return the  ans 

function findMedian(arr) {
    // Write your code here
    arr=arr.sort((a,b)=>a-b)
    return arr[Math.floor(arr.length/2)]
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = findMedian(arr);

    ws.write(result + '\n');

    ws.end();
}
