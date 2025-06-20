import { Given, When, Then } from '@cucumber/cucumber';

Given('I have a calculator', function () {
  // Initialize calculator in context
  this.setContext('calculator', {
    result: 0,
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
      if (b === 0) throw new Error('Division by zero');
      return a / b;
    }
  });
});

When('I add {int} and {int}', function (num1, num2) {
  const calculator = this.getContext('calculator');
  calculator.result = calculator.add(num1, num2);
});

When('I subtract {int} from {int}', function (num2, num1) {
  const calculator = this.getContext('calculator');
  calculator.result = calculator.subtract(num1, num2);
});

When('I perform {string} with {int} and {int}', function (operation, num1, num2) {
  const calculator = this.getContext('calculator');
  
  switch (operation.toLowerCase()) {
    case 'add':
      calculator.result = calculator.add(num1, num2);
      break;
    case 'subtract':
      calculator.result = calculator.subtract(num1, num2);
      break;
    case 'multiply':
      calculator.result = calculator.multiply(num1, num2);
      break;
    case 'divide':
      calculator.result = calculator.divide(num1, num2);
      break;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
});

Then('the result should be {int}', function (expectedResult) {
  const calculator = this.getContext('calculator');
  this.expect(calculator.result).to.equal(expectedResult);
});