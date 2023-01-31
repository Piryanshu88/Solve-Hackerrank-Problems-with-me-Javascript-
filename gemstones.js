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
 * Complete the 'gemstones' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY arr as parameter.
 */


// actual code 
// a gemstone is that which occur in every string like 
// arr=['abc','abc','bc']
// here bc is gemstone so we return 2
function gemstones(arr) {
    // Write your code here
    let n=arr.length
let count=0
let obj={}
// removing duplicate from arr 
for(let i=0;i<n;i++){
  arr[i]=[...new Set(arr[i])].join("")
}

// adding first string in obj
for(let i=0;i<arr[0].length;i++){
  if(obj[arr[0][i]]==undefined){
    obj[arr[0][i]]=1
  }
}

// checking other element of arry if they match then adding by 1 in their value 
for(let i=1;i<n;i++){
  for(let j=0;j<arr[i].length;j++){
    if(obj[arr[i][j]]){
      obj[arr[i][j]]++
      
    }
  }
}
// checking if obj value is same as length of arry
for(let key in obj){
  if(obj[key]==n){
    count++
  }
}
return count
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < n; i++) {
        const arrItem = readLine();
        arr.push(arrItem);
    }

    const result = gemstones(arr);

    ws.write(result + '\n');

    ws.end();
}
