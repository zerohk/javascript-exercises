const palindromes = function (str) {
  str = str.toUpperCase().split('').filter(
    (char) => (char >= 'A' && char <= "Z") || (char >= '0' && char <= '9'));
  return str.join('') === str.reverse().join('');
};

console.log("Animal loots foliated detail of stool lamina.".toUpperCase().split('').filter((char) =>
  (char >= 'A' && char <= "Z") || (char >= '0' && char <= '9')).reverse().join('')
);

console.log(palindromes('racecar'));
console.log(palindromes('Animal loots foliated detail of stool lamina.'));
console.log(palindromes('ZZZZ car, a man, a maracaz.'));





// Do not edit below this line
module.exports = palindromes;
