function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

let firstNumber = 0;
let secondNumber = 0;
let operator = '';

function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case '+':
      return add(firstNumber, secondNumber);
      break;
    case '-':
      return subtract(firstNumber, secondNumber);
      break;
    case '*': 
      return multiply(firstNumber, secondNumber);
      break;
    case '/':
      return divide(firstNumber, secondNumber);
      break;
  }
}

const display = document.querySelector('.display');
display.textContent = '';
let currentNumber = '';

function updateDisplay(value) {
  display.textContent += value;
}

// Add event listeners to number buttons
const numbers = document.querySelectorAll('.numbers button');

for (const number of numbers) {
  if (number.textContent === '=') continue;
  number.addEventListener('click', () => {
    currentNumber += number.textContent;
    updateDisplay(number.textContent);
  });
}

// Add event listeners to operator buttons
const operators = document.querySelectorAll('.operators button');

for (const opr of operators) {
  if (opr.textContent === 'C') continue;
  opr.addEventListener('click', () => {
    // Is operator already exist then do the calculation and save it to the first number
    if (operator !== '') {
      secondNumber = Number(currentNumber);
      firstNumber = operate(operator, firstNumber, secondNumber);
      operator = opr.textContent;
      updateDisplay(` ${operator} `);
      currentNumber = '';
    } else {
      operator = opr.textContent;
      updateDisplay(` ${operator} `);
      firstNumber = Number(currentNumber);
      currentNumber = '';
    }
  });

}

// Add event listener for equals button
const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
  secondNumber = Number(currentNumber);
  let result = operate(operator, firstNumber, secondNumber);
  display.textContent = result;
  currentNumber = result;
  firstNumber = currentNumber;
  secondNumber = 0;
});

// Add event listener to clear button
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
  display.textContent = '';
  currentNumber = '';
  firstNumber = 0;
  seconNumber = 0;
  operator = '';
});