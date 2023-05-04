const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	// let result = 0;
  // numArray.forEach(element => {
  //   result += element;
  // });
  // return result;
  // Logic is correct but the exercises intent was to learn array methods.

  return numArray.reduce((total, current) => total + current, 0);
};

const multiply = function(numArray) {
  // let result = 1;
  // numArray.forEach(element => {
  //   result *= element;
  //   return result
  // });
  // return result;
  // Logic is correct but the programs intent was to learn array methods.

  return numArray.length
    ? numArray.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	let result = 1;
  if (num == 0) {
    return result;
  }
  else {
    for (let i = num; i > 0; i--) {
      result *= i;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
