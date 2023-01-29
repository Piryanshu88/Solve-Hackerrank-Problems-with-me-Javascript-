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
 * Complete the 'funnyString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

// actual code for solution
// A string  called funny if difference between the adjacent element is same 
function funnyString(s) {
    // Write your code here
  let lower='abcdefghijklmnopqrstuvwxyz'
  let arr=[]
  
  // here i am making an array with the adjacent difference
  for(let i=0;i<s.length-1;i++){
    arr.push(Math.abs((lower.indexOf(s[i]))-(lower.indexOf(s[i+1]))))
  }
  s=s.split("").reverse().join("")
  for(let i=0;i<s.length-1;i++){
    // here i am checking if the adjacent diff is same or not 
    if(Math.abs((lower.indexOf(s[i]))-(lower.indexOf(s[i+1])))!=arr[i]){
      return "Not Funny"
    }
  }
  return "Funny"
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = funnyString(s);

        ws.write(result + '\n');
    }

    ws.end();
}
