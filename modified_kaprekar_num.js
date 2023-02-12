// boiler plate for js 
'use strict';7


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
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */

function kaprekarNumbers(num, q) {
    // Write your code here
    let ans=[]
    num=BigInt(num)
    q=BigInt(q)
while (num <= q) {
  let str = num * num
  
  str=str.toString().split("")
  //console.log(str)
  let mid = Math.floor(str.length / 2)
  let fsum = ""
  for (let i = 0; i < mid; i++) {
    fsum += str[i]
  }
  fsum=+fsum
  let ssum=""
  for (let i = mid; i < str.length; i++) {
    ssum += str[i]
  }
  ssum=+ssum
  if (ssum+fsum == num) {
    ans.push(num)
  }
  num++
}
    if(ans.length==0){
      console.log('INVALID RANGE')
    }else{
      console.log(ans.join(" "))
    }
    //9968363840

}

function main() {
    const p = parseInt(readLine().trim(), 10);

    const q = parseInt(readLine().trim(), 10);

    kaprekarNumbers(p, q);
}
