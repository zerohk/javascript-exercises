const sumAll = function (start, end) {
  // 如果不是非负整数则返回ERROR
  if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
    return 'ERROR'
  }
  if (start > end) {
    let temp = start;
    temp = start;
    start = end;
    end = temp;
  }
  let result = 0;
  for (let i = start; i <= end; i++) {
    result += i;
  }
  return result;
};


console.log(sumAll(-10, 4));

// Do not edit below this line
module.exports = sumAll;
