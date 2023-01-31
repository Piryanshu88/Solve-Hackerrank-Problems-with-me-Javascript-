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
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

// actual code 
// we have to figure out a way to get both kangaroos at the same location .if it is possibl ethen we have to print YES or else NO
/*
The first kangaroo starts at location x1  and moves at a rate of v1  meters per jump.
The second kangaroo starts at location x2  and moves at a rate of v2 meters per jump.
 */
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    // logic for problem
     let n = (x1 - x2) / (v2 - v1);
     
    if (n >= 0 && n % 1 == 0) {
        return "YES";
    } else {
        return "NO"
    }
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const x1 = parseInt(firstMultipleInput[0], 10);

    const v1 = parseInt(firstMultipleInput[1], 10);

    const x2 = parseInt(firstMultipleInput[2], 10);

    const v2 = parseInt(firstMultipleInput[3], 10);

    const result = kangaroo(x1, v1, x2, v2);

    ws.write(result + '\n');

    ws.end();
}
