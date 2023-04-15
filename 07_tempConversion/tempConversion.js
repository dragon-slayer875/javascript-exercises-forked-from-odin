const convertToCelsius = function(inputTemp) {
  let result = Math.round(((inputTemp - 32) * (5/9)) * 10) / 10  
  return result
};

const convertToFahrenheit = function(inputTemp) {
  let result = Math.round((inputTemp * (9/5) + 32) * 10) / 10
  return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
