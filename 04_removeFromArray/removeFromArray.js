const removeFromArray = function(array, ...args) {
    const newArray = [];
    array.forEach(element => {
        if (!args.includes(element)) {
            newArray.push(element)
        }
    });
    return newArray
}

// Approach 2:
// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.

// var removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }
//

// Below approach is correct, but doesn't utilise the methods
// for arrays in js.

// function(...theInputs) {
//     const compareValues = theInputs.slice(1)
//     for (let j = 0; j < compareValues.length; j++) {
//         for (let i = 0; i < theInputs[0].length; i++) {
//             if (theInputs[0][i] === compareValues[j]) {
//                 theInputs[0].splice(i, 1)
//             }
//         }        
//     }
//     return theInputs[0]
// };

// Do not edit below this line
module.exports = removeFromArray;
