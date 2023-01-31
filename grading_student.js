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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

// actual code 
// we have to round the grades as following 
//-- If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
//-- If the value of  is less than , no rounding occurs as the result will still be a failing grade.
function gradingStudents(grades) {
    // Write your code here
    
    for(let i=0;i<grades.length;i++){
        // checking if grades are above the failing  criteria and then round the value
        if(grades[i]>=38){
         if(Math.ceil(grades[i]/5)*5-grades[i]<3){
           grades[i]=Math.ceil(grades[i]/5)*5
         }
        }
    }
    return grades
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

  ws.write(result.join('\n') + '\n');

    ws.end();
}
