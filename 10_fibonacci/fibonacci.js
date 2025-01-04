const fibonacci = function(num) {
    num = Number(num)
    
    if (num === 0) {
        return 0
    } else if (num === 1 || num === 2) {
        return 1
    } else if (num < 0) {
        return "OOPS"
    }

    let seq = [1, 1];
    for (let i = 0; i < num-2; i++) {
        newElement = seq.at(-1) + seq.at(-2);
        seq.push(newElement);
    }
    return seq.at(-1)
};

// Do not edit below this line
module.exports = fibonacci;
