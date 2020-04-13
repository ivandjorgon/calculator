const display = document.querySelector('input[name="result"]');
let displayValue = 0;

// clickNum function here

document.querySelectorAll('.number').forEach(num => {
  num.addEventListener('click', e => {
    // call clickNum
    // set the texContent of your display element to the value stored in displayValue
  });
});

// const display = document.body.querySelector('input[name="result"]');
// const buttons = document.body.querySelectorAll('input[type="button"]');
// console.log(document.body.querySelector('input[name="result"]'));
// console.log(document.body.querySelectorAll('input[type="button"]'));

buttons.forEach(item => item.addEventListener('click', function(e) {
display.textContent = e.target.textContent;
}));

function toAdd(a, b) {
    return a + b;
}

function toSubtract(a, b) {
    return a - b;
}

function toMultiply(a, b) {
    return a * b;
}

function toDivide(a, b) {
    return a / b;
}

function toOperate(operation, num1, num2) {
    switch (operation) {
      case 'toAdd':
        return toAdd(num1, num2);
        break;
      case 'toSubtract':
        return toSubtract(num1, num2);
        break;
      case 'toMultiply':
        return toMultiply(num1, num2);
        break;
      case 'toDivide':
        return toDivide(num1, num2);
        break;
      default:
        console.log("An error occurred, please try again.");
    }
  }

// Tests
console.info(toAdd(0.1, -0.1));
console.info(toSubtract(3, 2));
console.info(toMultiply(46, -5));
console.info(toDivide(15, -5));
