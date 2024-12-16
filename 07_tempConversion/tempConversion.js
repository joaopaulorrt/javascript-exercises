function roundExtended (number, decimals) {
    multiplier = 10 ** decimals
    return Math.round(number*multiplier) / multiplier
}

const convertToCelsius = function(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return roundExtended(celsius, 1)
};

const convertToFahrenheit = function(celsius) {
    const fahrenheit = celsius * 9 / 5 + 32;
    return roundExtended(fahrenheit, 1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
