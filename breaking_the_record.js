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



// actual code 
/**
 *  let scores=[12,24,10,24]                
 *                                   Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1
 */
function breakingRecords(scores) {
    // Write your code here
    let max=scores[0]
    let min=scores[0]
    let maxCount=0
    let minCount=0
    for(let i=0;i<scores.length;i++){
      if(max<scores[i]){
        max=scores[i]
        maxCount++
      }
      if(min>scores[i]){
        min=scores[i]
        minCount++
      }
    }
return [maxCount,minCount]

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
