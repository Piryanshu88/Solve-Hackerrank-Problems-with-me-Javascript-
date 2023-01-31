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
 * Complete the 'makingAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

// actual code for problem
// we have to make both str exact same and for that we can do delete operation and we have to count it and return as an answer
function makingAnagrams(s1, s2) {
    // Write your code here
    let d=0
    let arr=s2.split('')
    for(let i=0;i<s1.length;i++){
    // checking s1 letter occur in s2 if not then it return -1
      let c=arr.indexOf(s1[i])

      if(c==-1){
        d++
        // if it is not present in s2 then we can make an count 
      }else{
        // id it is there remove it from s1 arry
        arr.splice(c,1)
      }
    }
    // at last add number of deletions and remaning element of ar(which doesn't occur in s2)
    console.log(d,arr)
    return d+arr.length
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    const result = makingAnagrams(s1, s2);

    ws.write(result + '\n');

    ws.end();
}
