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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

// actual code for problem
/*
in this problem we have to convert the time to 12 hrss format to military format (24 hrs)
in this problem we have to keep certain edge cases in mind 
-- if there is 12AM that means 00 in military time 
-- if it is in PM and h is less than 12 then we have to add 12 in given hrs
-- if it less than 12 then you just have to print the given hrs
 */
function timeConversion(s) {
    // Write your code here
let pa = s.split("").slice(-2).join("")
  let m = s.split("").slice(3, 5).join("")
  let ss = s.split("").slice(6, s.length - 2).join("")
  let h = s.split("").slice(0, 2).join("")
  if (pa == 'PM') {

    if (Number(h) < 12) {
      return `${Number(h) + 12}:${m}:${ss}`
    } else {
      return `${h}:${m}:${ss}`
    }
  } else {
  if(h==12){
    return `00:${m}:${ss}`
  }else{
    return `${h}:${m}:${ss}`
  }
  }
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
