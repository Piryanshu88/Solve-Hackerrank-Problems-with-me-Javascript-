//boiler plate for js 
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
 * Complete the 'camelcase' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
// actual code for problem
// in this question we have to count the number of word in an string (camelCase)
// so first we can declare a variable in which all the alphabet present 
// after run an for loop and count number of time an uppercase letter appear
// and then add an +1 to it because the first word doesn't have uppercase letter because the string is written in cameelCase
// like oneTwoThree --->there are 2 uppercase ch but there is 3 words because one is occcur at first~
function camelcase(s) {
    let count=0
    let lower='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i=0;i<s.length;i++){
      if(lower.includes(s[i])){
        count++
      }
    }
    return count+1

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = camelcase(s);

    ws.write(result + '\n');

    ws.end();
}
