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
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

//actual solution 
// 'pangram '->A pangram is a string that contains every letter of the alphabet.
function pangrams(st) {
    // Write your code here
// here I am removing the duplicate element for str and then convert it to lowercase then i am spliting it to make sort fn and then doing join
  let s=[...new Set(st.toLowerCase().split(""))].sort().join("")
  let lower='abcdefghijklmnopqrstuvwxyz'
  for(let i=0;i<lower.length;i++){
    // here i am checking if lower str is not equal to st then return not panagram we don't have to do further operation
   if(s[i+1]!=lower[i]) {
     return "not pangram"
   }
  }
  return "pangram"
  
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = pangrams(s);

    ws.write(result + '\n');

    ws.end();
}
