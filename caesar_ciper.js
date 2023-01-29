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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */
// actual code for it 
// we have given an string here and we have to rotate the alphabet in k terms 
function caesarCipher(s, k) {
    // Write your code here
let lower= 'abcdefghijklmnopqrstuvwxyz'
  let upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ'

//okffng-Qwvb
let bag=''
for(let i=0;i<s.length;i++){
    // if str includes lower case 
  if(lower.includes(s[i])){
    // here I am adding the rotated str in bag 
    bag+=lower[(lower.indexOf(s[i])+k)%26]
    
  }else if(upper.includes(s[i])){
    // same for upper case str 
    bag+=upper[(upper.indexOf(s[i])+k)%26]
  }else{
    // if there is special ch then i can simply add it in bag 
    bag+=s[i]
  }
  
}
return bag
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}
