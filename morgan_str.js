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
 * Complete the 'morganAndString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */
// actual code for js 
/*
we have return an str adding both a and b like this ⬇⬇

Jack	Daniel	result
ACA	    BCF
CA	    BCF	    A
CA	    CF	    AB
A	    CF	    ABC
A	    CF	    ABCA
	    F	    ABCAC
		        ABCACF
 */
function morganAndString(a, b) {
    // Write your code here
     a += "z"
    b += "z"
    // adding z to str becasue no alphabet is greater than z 
    let bag=''  
    while (a.length!=0&&b.length!=0) {
        // if a's ele is smaller then add b's ele to bag or vice versa
        if (a[0] < b[0]) {
          bag+=a[0]
          a=a.substring(1)
            
        } else {
            bag+=b[0]
          b=b.substring(1)
        }
    }
  bag=bag.split("")
  // removing z from bag
  bag.pop()
  return bag.join("")
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const a = readLine();

        const b = readLine();

        const result = morganAndString(a, b);

        ws.write(result + '\n');
    }

    ws.end();
}
