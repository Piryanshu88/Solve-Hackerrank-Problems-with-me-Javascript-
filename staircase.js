//boiler plate for js
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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

//  actual code for problem
// we have to print an pattern 
//like, if they give an number 4 so the ans will be 
/*
   #
  ##
 ###
####
 */
function staircase(n) {
    // Write your code here
    // this is an simple logic for printing above pattern 
    for(let i=1;i<=n;i++){
        let bag=""
        for(let j=1;j<=n;j++){
            if(j>n-i){
                bag=bag+"#"
            }else{
                bag=bag+" "
            }
        }
        console.log(bag)
    }
   
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
