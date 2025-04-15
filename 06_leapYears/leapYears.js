const leapYears = function (year) {
  // 能被4整除，但不能被100整除；或者能被400整除
  if (year % 4 == 0) {
    if (year % 100 == 0 && year % 400 != 0) return false
    else return true;
  } else return false;
};

console.log(leapYears(700));


// Do not edit below this line
module.exports = leapYears;
