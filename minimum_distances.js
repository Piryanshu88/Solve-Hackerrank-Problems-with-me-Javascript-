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
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function minimumDistances(arr) {
    // Write your code here
//const arr = [3,2,1,2,3]
let min=Infinity
for(let i=0;i<arr.length;i++){
  for(let j=i+1;j<arr.length;j++){
      // finding the matching pair 
    if(arr[i]==arr[j]){
      
      if(min>Math.abs(j-i)){
        // finding the minimum distance
        min=Math.abs(j-i)
      }
    }
  }
}
if(min ==Infinity){
  return -1
}else{
 return min 
}
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = minimumDistances(a);

    ws.write(result + '\n');

    ws.end();
}
