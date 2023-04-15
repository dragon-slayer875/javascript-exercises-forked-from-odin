const sumAll = function(num1, num2) {
    let sum = 0
    if (typeof num1 != 'number' || typeof num2 != 'number' || num1 < 0 || num2 < 0) {
        return 'ERROR'
    }
    
    // for (let i = 0; i < arguments.length; i++) {
    //     if (arguments[i] < 0 || typeof arguments[i] != 'number') {
    //         return 'ERROR'
    //     }
    // } 

    // Instead of using the for loop, which would take more time and space, 
    // used a simple conditional to check for the given req(s) since we know 
    // that only 2 arguements will be provided 

    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            sum += i
        }
    }
    else if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            sum += i            
        }
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
