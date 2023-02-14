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
 * Complete the 'cavityMap' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function cavityMap(arr) {
    // Write your code here
    for(let i=1;i<arr.length-1;i++){
      for(let j=1;j<arr.length-1;j++){
        // checking if current element is greater than it's left right top bottom elements  
      if(arr[i][j]>arr[i+1][j]&&
      arr[i][j]>arr[i][j-1]
      &&arr[i][j]>arr[i-1][j]
      &&arr[i][j]>arr[i][j+1]){
        
        // replace the element to X
        const row=arr[i].split("")
        row[j]="X"
        arr[i]=row.join("")
      }   
      }
    }
    return arr

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let grid = [];

    for (let i = 0; i < n; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    const result = cavityMap(grid);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
