const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, value) => sum += value, 0);
};

// console.log(sum([7, 11]));


const multiply = function (arr) {
  return arr.reduce((production, value) => production *= value, 1);
};

// console.log(multiply([2, 4]));


const power = function (a, b) {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
};

// console.log(power(4, 3));
// console.log(power(3, 10));


const factorial = function (a) {
  if (a == 0 || a == 1) return 1;
  return a * factorial(a - 1);
};

console.log(factorial(10));


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
