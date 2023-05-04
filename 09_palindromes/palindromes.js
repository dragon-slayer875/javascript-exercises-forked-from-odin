const palindromes = function (string) {
//     const stringArray = string.toLowerCase().split('');

//     const onlyAlphabetString = stringArray.filter(element => {
//         return element.toUpperCase() != element.toLowerCase() || element.codePointAt(0) > 127;
//     })

//     const reverseString = onlyAlphabetString.reduce((firstChar, nextChar) => nextChar + firstChar)

//     return reverseString == onlyAlphabetString.join('') ? true: false;

// the logic was correct and the approach too, but the exercise went with the regex approach which stackOverflow
// said is not more reliable and hence was not implemented by me.

    const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    return processedString.split("").reverse().join("") == processedString;
};


// Do not edit below this line
module.exports = palindromes;
