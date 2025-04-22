document.getElementById("analyzeBtn").addEventListener("click", analyseNumbers);

function analyseNumbers() {
const numbers = document.getElementById("numbers").value;
let allNumbers = numbers.split(",").map(num => parseInt(num.trim()));

let sum = 0;
let average = 0;
let max = allNumbers[0];
let min = allNumbers[0];
let count = allNumbers.length;

allNumbers.forEach((number) => 
{
 sum += number;
});

count = allNumbers.length;
average = sum / count;
max = Math.max(...allNumbers);
min = Math.min(...allNumbers);

showAnalysis(sum, average, min, max, count);
}

function showAnalysis(sum, average, min, max, count) {
  document.getElementById("sum").innerHTML = "Sum: " + sum;
  document.getElementById("average").innerHTML = "Average: " + average;
  document.getElementById("min").innerHTML = "Minimum: " + min;
  document.getElementById("max").innerHTML = "Maximum: " + max;
  document.getElementById("count").innerHTML = "Count: " + count;
}