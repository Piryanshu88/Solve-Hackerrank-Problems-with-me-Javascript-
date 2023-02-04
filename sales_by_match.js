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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

// arr= 1 2 1 2 1 3 2
// in this question we have to make pair  like 
/*
 1-->1 
 2-->2 
 1 & 3 & 2 is left out 
 */
function sockMerchant(n, ar) {
    // Write your code here
    let obj={}
    let count=0
    for(let i=0;i<n;i++){
        // adding frequecy to obj
      if(obj[ar[i]]==undefined){
        obj[ar[i]]=1
      }else {
        obj[ar[i]]++
      }
    }
    for(let key in obj){
      count+=Math.floor(obj[key]/2)
    }
  return  count
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
