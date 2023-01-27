// boiler plate for js start here ---
process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function (data) {
  input_stdin += data;
});

process.stdin.on("end", function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}
// boiler plate for js end here ---

// In question it has given two parameters a and b both are number
// Input :- a=2,b=3

// we have to provide the sum of two values and return it

//Output :- 5

// like if we have a=4,b=10
// then output will be 14

// actual solution starts
function solveMeFirst(a, b) {
  // here i am using mathematical operator both values data type  is already number so i don't have to change it
  return a + b;
}
// actual solution ends

function main() {
  var a = parseInt(readLine());
  var b = parseInt(readLine());

  var res = solveMeFirst(a, b);
  console.log(res);
}
