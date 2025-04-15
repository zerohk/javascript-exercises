const reverseString = function (str) {
  let strArr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    strArr[str.length - 1 - i] = str[i];
  }
  return strArr.join('');
};

console.log(reverseString("123! abc! Hello, Odinite."));

// Do not edit below this line
module.exports = reverseString;
