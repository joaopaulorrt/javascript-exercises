const sumAll = function(a, b) {
    if (typeof(a) !== "number" || typeof(b) !== "number" ) {
        return 'ERROR'
    }
    if (a < 0 || b < 0) {
        return 'ERROR'
    }
    if (a % 1 !== 0 || b % 1 !== 0) {
        return 'ERROR'
    }
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let total = min + max;
    for (i = min + 1; i < max; i++) {
        total += i
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
