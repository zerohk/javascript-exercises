const findTheOldest = function (people) {
  let sortedPeople = people.sort((personA, personB) => {
    let thisYear = new Date().getFullYear();
    if (personA.yearOfDeath === undefined) {
      personA.yearOfDeath = thisYear;
    }
    if (personB.yearOfDeath === undefined) {
      personB.yearOfDeath = thisYear;
    }
    aAge = personA.yearOfDeath - personA.yearOfBirth;
    bAge = personB.yearOfDeath - personB.yearOfBirth;
    return bAge - aAge;
  })
  return sortedPeople[0];
};







// Do not edit below this line
module.exports = findTheOldest;
