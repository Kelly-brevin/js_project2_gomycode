// String Manipulation Functions

// Function to reverse a given string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to count the number of characters in a string
function countCharacters(str) {
  return str.length;
}

// Function to capitalize the first letter of each word in a sentence
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Array Functions

// Function to find the maximum value in an array of numbers
function findMax(arr) {
  return Math.max(...arr);
}

// Function to find the minimum value in an array of numbers
function findMin(arr) {
  return Math.min(...arr);
}

// Function to calculate the sum of all elements in an array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Function to filter out elements from an array based on a given condition
function filterArray(arr, condition) {
  return arr.filter(condition);
}

// Mathematical Functions

// Function to calculate the factorial of a given number
function factorial(n) {
  if (n < 0) return "Factorial not defined for negative numbers";
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Function to check if a number is prime
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Function to generate the Fibonacci sequence up to a given number of terms
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

// Testing the functions
console.log(reverseString("hello")); // Output: "olleh"
console.log(countCharacters("hello world")); // Output: 11
console.log(capitalizeWords("hello world")); // Output: "Hello World"
console.log(findMax([3, 1, 7, 9, 2])); // Output: 9
console.log(findMin([3, 1, 7, 9, 2])); // Output: 1
console.log(sumArray([3, 1, 7, 9, 2])); // Output: 22
console.log(filterArray([1, 2, 3, 4, 5], (num) => num > 2)); // Output: [3, 4, 5]
console.log(factorial(5)); // Output: 120
console.log(isPrime(7)); // Output: true
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
