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
 * Complete the 'minimumLoss' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts LONG_INTEGER_ARRAY price as parameter.
 */

// actual code for js 
// here we have to find the minumum `loss` diff b/w two element 
//like let arr=[20 7 8 2 5]
// here first loss is 20-7=13,like this 12,18,15
// then we have profit 7-8=1,but then 7-2=5 ,7-5=2
// then loss again 8-2=4
// at last profit 
//so minimum loss will be 2
function minimumLoss(price) {
    // Write your code here
    let min=Infinity
    let obj={}
    for(let i=0;i<price.length;i++){
      obj[price[i]]=i
    }
    price.sort((a,b)=>b-a)
    for(let i=1;i<price.length;i++){
      if(obj[price[i-1]]<obj[price[i]]){
        if(min>price[i-1]-price[i]){
          min=price[i-1]-price[i]
        }
      }
    }
    return min
   

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const price = readLine().replace(/\s+$/g, '').split(' ').map(priceTemp => parseInt(priceTemp, 10));

    const result = minimumLoss(price);

    ws.write(result + '\n');

    ws.end();
}
