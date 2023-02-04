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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

// if we have str 
// UDDDUDUU
/* 
_/\      _
   \    /
    \/\/
*/
function countingValleys(steps, path) {
    // we have to check the number of valleys 
    // 
    // 
    let sum = 0;
    let  valley = 0;
    let  seabelow = false;
    for(let i=0;i<path.length;i++){
      // when it is U the we are add sum and else sum--
      path[i]=='U'?sum++:sum--
      if(sum<0){
        seabelow=true
      }
       if(sum>0){
        seabelow=false
      }
      // when sum is 0 it means it is a valley and make an pattern like
      //-- \/
      if(seabelow&&sum==0){
        
        valley++
      }
    }
    
    return valley;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
