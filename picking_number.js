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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    // Write your code here''
    // finding subarr max length whose element diff is less than or equal to 1
    a.sort((a,b)=>a-b)
    let max=0
    
    let count=0
  for(let i=0;i<a.length;i++){
    for(let j=0;j<a.length;j++){
      if((a[i]-a[j])<=1&&a[i]-a[j]>=0){
        count++
        if(max<count){
          max=count
        }
      }else{
        count=0
      }
    }
    count=0
  }
  return max
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
