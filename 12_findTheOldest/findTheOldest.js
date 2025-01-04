const findTheOldest = function(arr) {
    arr.map(person => person.yearOfDeath ??= new Date().getFullYear())
    arr.map(person => person.age = person.yearOfDeath - person.yearOfBirth)
    arr.sort((a, b) => a.age < b.age ? 1 : -1)
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
