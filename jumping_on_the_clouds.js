// boiler plate for js 
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
  
  // The character starts from c[0] and uses 1 unit of energy to make a jump of         size k to cloud c[(i+k)%n].
  // If the value is equal to 1 power decreased by 2 and game ends if character         land on cloud -
let power = 100
let i = 0
while (i < c.length) {
  if (c[(i + k) % c.length] == 0) {
    power = power - 1
  } else if (c[(i + k) % c.length] == 1) {
    power = power - 1 - 2
  }
  i = i + k
}
return power

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c, k);

    ws.write(result + "\n");

    ws.end();
}
