const convertToCelsius = function (degree) {
  let result = 5 / 9 * (degree - 32);
  if (Number.isInteger(result)) return result;
  return +result.toFixed(1);
};

const convertToFahrenheit = function (degree) {
  let result = 9 / 5 * degree + 32;
  if (Number.isInteger(result)) return result;
  return +result.toFixed(1)
};

console.log(typeof convertToCelsius(100));


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
