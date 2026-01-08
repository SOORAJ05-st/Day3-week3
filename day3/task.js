/*************************************************
 HIGHER-ORDER FUNCTIONS (HOF)
 A function that takes another function as argument
 or returns a function
*************************************************/

function operateOnArray(arr, operation) {
  return operation(arr);
}

// TASK 1: Transform Arrays using map & filter

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(num => num * num);

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Squares:", squares);
console.log("Even Numbers:", evenNumbers);

// reduce → combine array into single value

const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

// TASK 2: Create Reusable Utility Functions
// reusable utility function using HOF
const calculate = (arr, logic) => arr.map(logic);

const double = num => num * 2;
const triple = num => num * 3;

console.log("Doubles:", calculate(numbers, double));
console.log("Triples:", calculate(numbers, triple));

// TASK 3: Refactor Function to be Pure

// Impure function (modifies external variable)
let totalMarks = 0;

function addMarks(mark) {
  totalMarks += mark;
  return totalMarks;
}

// Pure function (no side effects)
function addMarksPure(total, mark) {
  return total + mark;
}

console.log("Pure Function:", addMarksPure(80, 20));
