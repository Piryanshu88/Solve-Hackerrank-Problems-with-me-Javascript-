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
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(str, n) {
    // Write your code here
    // here we have to find no of `a` in first n letters
    let count=0
    // if n is smaller than str length
    if(n<str.length){
      let k=str.length-n
    for(let i=0;i<=k;i++){
    if(str[i]=='a'){
      count++
    }
  }
  return  count
}
for(let i=0;i<str.length;i++){
  if(str[i]=='a'){
    count++
  }
}
// console.log(count*Math.floor(
//str.length))
let noOf=1
if(n>str.length){
   noOf=Math.floor(n/str.length)
  count=count*noOf
  let k=n-Math.floor(n/str.length)*str.length
 // console.log(k)
  for(let i=0;i<k;i++){
    if(str[i]=='a'){
      count++
    }
  }
}
return count


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    ws.write(result + '\n');

    ws.end();
}
