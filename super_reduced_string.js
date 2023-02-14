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
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function superReducedString(s) {
    // Write your code here
    // we have to remove same adjacent element 
    // like this --> aaabccddd → abccddd → abddd → abd
    let stack=[]
    for(let i=0;i<s.length;i++){
      if(stack.length!=0&&stack[stack.length-1]==s[i]){
        stack.pop()
      }else{
      stack.push(s[i])  
      }
      
    }
    if(stack=='')
    return "Empty String"
    else
    return stack.join("")
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = superReducedString(s);

    ws.write(result + '\n');

    ws.end();
}
