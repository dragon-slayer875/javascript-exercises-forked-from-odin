const repeatString = function(inputString, num) {
    
    // let resultString = ''

    if (num < 0) {
        return "ERROR"
    }

    let resultString = ''

    // As the program ends on running return, no need to use else.
    // As a result, it would be more novel to declare the string storing variable
    // after checking if the program will even run in the first place or not.

    // else{
    for (let i = 0; i < num; i++) {
        resultString += inputString;
    }
    // }
    return resultString
};

// Do not edit below this line
module.exports = repeatString;
