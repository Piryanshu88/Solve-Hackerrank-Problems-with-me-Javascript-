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
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

//  Given an integer, for each digit that makes up the integer determine whether       it is a divisor. Count the number of divisors occurring within the integer.
// like n=124
// in this case 1,2,4 all divisible by 124 so we return 3
function findDigits(n) {
    // Write your code here
  
  let count=0
const ele=n.toString().split("").map(Number)

for(let i=0;i<ele.length;i++){
  if(n%ele[i]==0){
    count++
  }
}

return count
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = findDigits(n);

        ws.write(result + '\n');
    }

    ws.end();
}
