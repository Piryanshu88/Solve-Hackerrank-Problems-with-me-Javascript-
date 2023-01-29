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
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
// actual solution
// we have given an str and we hhave to match ot with SOS signal str and return the number of count 
// first  i am making an str for SOS signal
function marsExploration(s) {
    // Write your code here
let count=0
//this is str for SOS signal
let expStr=new Array(s.length/3).fill("SOS").join("")

for(let i=0;i<s.length;i++){
    // here we are just comparing it with original str 
  if(expStr[i]!=s[i]){
    count++
  }
}
return count

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = marsExploration(s);

    ws.write(result + '\n');

    ws.end();
}
