// boiler plate for js
'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// actual code for solution...
function plusMinus(arr) {
    // Write your code here
    // here we have to find the ratio for postive ,negative and zeros values
    // we can find the ratio by dividing the specific part by whole length 

    let pos=0;
    let neg=0;
    let zer=0
    for(let i=0;i<arr.length;i++){
        // here we are finding the occurennce of each for finding ratio
        if(arr[i]>0){
            pos++
        }else if(arr[i]==0){
            zer++
        }else{
            neg++
        }
    }
    console.log(pos/arr.length)
    console.log(neg/arr.length)
    console.log(zer/arr.length)

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
