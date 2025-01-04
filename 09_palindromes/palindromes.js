const palindromes = function (str) {
    treatedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "")
    reversedStr = treatedStr.split("").reverse().join("")
    return treatedStr === reversedStr
};

// Do not edit below this line
module.exports = palindromes;
