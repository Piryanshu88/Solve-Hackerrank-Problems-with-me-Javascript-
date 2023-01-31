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
 * Complete the 'alternatingCharacters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */


// actual code for problem 
// here our task is to remove the same adjacent character from string 
// we can do it with helps of stacks 
function alternatingCharacters(s) {
    // Write your code here
    let stack=[]
    let count=0
  for(let i=0;i<s.length;i++){
    // whenever see same element we are removing it and count it 
    if(stack.length!=0&&stack[stack.length-1]==s[i]){
      stack.pop()
      count=count+1
    }
    stack.push(s[i])
  }
  //at last returning the no of count 
    return count
  
  
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = alternatingCharacters(s);

        ws.write(result + '\n');
    }

    ws.end();
}
