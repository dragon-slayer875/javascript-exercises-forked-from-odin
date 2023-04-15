const reverseString = function(inputString) {
    // let resultString = ''
    // for (let i = inputString.length - 1; i >= 0; i--) {
    //     resultString += inputString[i];
    // }
    // return resultString
     
    // Correct solution but doesn't use the string and array method 
    // provided by js. Can be used for lang(s) not having these methods.

    return inputString.split("").reverse().join("")
};

// Do not edit below this line
module.exports = reverseString;
