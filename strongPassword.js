// boiler plate for js
"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

//actual code for js
// we have to check the password
/*
Its length is at least 6.
It contains at least one digit.
It contains at least one lowercase English character.
It contains at least one uppercase English character.
It contains at least one special character. The special characters are: !@#$%^&*()-+
*/
function minimumNumber(n, password) {
  let numbers = "0123456789";
  let lower_case = "abcdefghijklmnopqrstuvwxyz";
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let special_characters = "!@#$%^&*()-+";
  let count = 0;
  let nu = false;
  let sc = false;
  let up = false;
  let lc = false;
  for (let i = 0; i < n; i++) {
    // checking password contains number
    if (numbers.includes(password[i])) {
      nu = true;
    }
  }
  // checking password contains lowercase
  for (let i = 0; i < n; i++) {
    if (lower_case.includes(password[i])) {
      lc = true;
    }
  }

  // checking password contains uppercase
  for (let i = 0; i < n; i++) {
    if (upper_case.includes(password[i])) {
      up = true;
    }
  }
  // checking password contains special character
  for (let i = 0; i < n; i++) {
    if (special_characters.includes(password[i])) {
      sc = true;
    }
  }

  if (!nu) {
    // if number is not there then we have to add it
    count++;
  }
  if (!lc) {
    // if lowercase is not there then we have to add it
    count++;
  }
  if (!up) {
    // if uppercase is not there then we have to add it
    count++;
  }
  if (!sc) {
    // if special character is not there then we have to add it
    count++;
  }

  // if password length is less than 6 then we have to add the required number 
  if (n + count < 6) {
    count = count + (6 - (n + count));
  }
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const password = readLine();

  const answer = minimumNumber(n, password);

  ws.write(answer + "\n");

  ws.end();
}
