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


function encryption(s) {
    // Write your code here
s=s.split("")
let length = s.length
let row = Math.floor(Math.sqrt(length))
let col = Math.ceil(Math.sqrt(length))
//console.log(row, col)
if (row * col < length) {
  row++
}

let mat = []
// making matrix 
for (let i = 0; i < row; i++) {
  let arr = []
  let j = 0
  while (j < col) {
    arr.push(s[j]||"")
    j++
  }
  s.splice(0, j)
  mat.push(arr)
}
console.log(mat)
let bag=""
for(let i=0;i<col;i++){
  for(let j=0;j<row;j++){
    bag+=mat[j][i]
  }
  bag+=" " 
}
return bag
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = encryption(s);

    ws.write(result + '\n');

    ws.end();
}
