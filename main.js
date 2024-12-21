// main.js

// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Function to divide two numbers
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}

// Test the functions
console.log("Add 2 + 3: ", add(2, 3)); // 5
console.log("Subtract 5 - 2: ", subtract(5, 2)); // 3
console.log("Multiply 3 * 4: ", multiply(3, 4)); // 12
console.log("Divide 10 / 2: ", divide(10, 2)); // 5
console.log("Divide 10 / 0: ", divide(10, 0)); // Error: Division by zero
