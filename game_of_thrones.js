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
 * Complete the 'gameOfThrones' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */


// actual code for problem
// we have to check whether the give str can make an palindrome or not ,if we arrange 
// like an str 'aabbaa' is a palindrome and 'aabaa' is also an palindrome 
function gameOfThrones(s) {
    // Write your code here
    let obj={}
    // here i am adding all element of str in obj with its number of occurence
    for(let i=0;i<s.length;i++){
      if(obj[s[i]]==undefined){
        obj[s[i]]=1
      }else{
        obj[s[i]]++
      }
    }
    // an str can arrange as palindrome if all element occur in even times or else on element can occur odd time 
    // or else it can be arrange ass palindrome 
    let c=0
    for(let key in obj){
      if(obj[key]%2==0){
        continue
      }else{
        c++
      }
    }
  if(c==0||c==1){
    return 'YES'
  }else{
    return 'NO'
  }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = gameOfThrones(s);

    ws.write(result + '\n');

    ws.end();
}
