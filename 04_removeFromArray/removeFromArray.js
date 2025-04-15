const removeFromArray = function (arr, ...restArgs) {
  return arr.filter((e) => !restArgs.includes(e))
};

console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3));


// Do not edit below this line
module.exports = removeFromArray;
