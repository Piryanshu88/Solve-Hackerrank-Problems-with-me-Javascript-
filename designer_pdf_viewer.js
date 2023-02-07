// boiler plate for js 
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
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
    // Write your code here
    // here we have to find the area of text so for that we have to multiply the tallest element and word length
    let lowerCase="abcdefghijklmnopqrstuvwxyz"
    let max=0
    let j=0
    while( j < word.length) {
  for (let i = 0; i < h.length; i++) {
    if (word[j] == lowerCase[i]) {
      let ans=h[i]
      if (max <ans) {
        // here we are findding the maximum element 
        max = ans    
      }
      j++
    }
  }
}
// here returning the area 
    return word.length*max

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = readLine().replace(/\s+$/g, '').split(' ').map(hTemp => parseInt(hTemp, 10));

    const word = readLine();

    const result = designerPdfViewer(h, word);

    ws.write(result + '\n');

    ws.end();
}
