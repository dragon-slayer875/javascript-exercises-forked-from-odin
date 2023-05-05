const fibonacci = function(number) {
//     if (number<0) {
//         return 'OOPS'
//     }
//     const fibonacciArray = []
//     for (let i = 0; i < number; i++) {
//         if (!fibonacciArray[1]) {
//             fibonacciArray.push(1)
//         }
//         else {
//             fibonacciArray.push((fibonacciArray[i-1] + fibonacciArray[i-2]))
//         }        
//     }
//     return fibonacciArray[number-1];
// Lol. Was a simple solution. Thought needed to be done with arrays akin to previous exercise.
    if (count < 0) return "OOPS";
    if (count === 0) return 0;
    let a = 0;
    let b = 1;
    for (let i = 1; i < count; i++) {
    const temp = b;
    b = a + b;
    a = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
