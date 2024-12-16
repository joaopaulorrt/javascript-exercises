function notInArray(array, value) {
    if (array.includes(value)) {
        return false;
    } else {
        return true;
    }
}

function removeFromArray (array, ...elementsToRemove) {   

    const shouldKeep = notInArray.bind(null, elementsToRemove);

    const newArray = array.filter(shouldKeep)

    return newArray;
};

// let myArray = [1, 2, 3, 3, 4, 5]

// console.log(removeFromArray(myArray, 3, 4))

// Do not edit below this line
module.exports = removeFromArray;
