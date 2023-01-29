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
 * Complete the 'hackerrankInString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
// actual code
// we have to find whether 'hackerrank' occur in str or not 
// but we have to Remeber that a subsequence maintains the order of characters selected from a sequence.

// index should be in this manner  h<a<c<k<e<r<r<a<n<k
function hackerrankInString(s) {
    // Write your code here
    let point=0
    let str='hackerrank'
    let i=0
   while(i<s.length){
     if(s[i]==str[point]){
       // if giiven str conatin letter for str then increment point variable 
       point++
       i++
     }else{
       i++
     }
   }
   // if point is equal to str length that means given str contain 'hackerrank'
   if(point==str.length){
     return 'YES'
   }else{
    return  'NO'
   }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = hackerrankInString(s);

        ws.write(result + '\n');
    }

    ws.end();
}
