// Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
// Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
// Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 'Error: Division by zero';
  }
  return a / b;
}

function calculator(a, b, operation) {
  switch (operation) {
    case 'addition':
      return add(a, b);
    case 'subtraction':
      return subtract(a, b);
    case 'multiplication':
      return multiply(a, b);
    case 'division':
      return divide(a, b);
    default:
      return 'Error: Invalid operation';
  }
}

// Example usage
console.log(calculator(10.5, 2.5, 'addition'));       
console.log(calculator(10.5, 2.5, 'subtraction'));    
console.log(calculator(10.5, 2.5, 'multiplication')); 
console.log(calculator(10.5, 0, 'division'));         



