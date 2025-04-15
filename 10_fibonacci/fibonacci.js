const fibonacci = function (nth) {
  if (nth < 0) return 'OOPS';
  if (nth == 0) return 0;
  if (nth == 1 || nth == 2) return 1;
  return fibonacci(nth - 1) + fibonacci(nth - 2);
};

console.log(fibonacci(4));


// Do not edit below this line
module.exports = fibonacci;
