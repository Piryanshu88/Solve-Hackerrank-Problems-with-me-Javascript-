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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
// actual code for problem statement 
function miniMaxSum(arr) {
    // Write your code 
    // wee have to find min sum and max sum 

    //it is simple 
    //- for finding the min sum remove the max element from array and add all the remaining element 
    // -for max sum remove the minimum element and fdo the sum of remaining element 
    
    let max=-Infinity
    let min=Infinity;
    let sum=0
    let sumarr=[]
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
     max=Math.max(arr[i],max)
     min=Math.min(arr[i],min)    
    }
    sumarr.push(sum-max,sum-min)
    console.log(sumarr.join(" "))

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
