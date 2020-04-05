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
