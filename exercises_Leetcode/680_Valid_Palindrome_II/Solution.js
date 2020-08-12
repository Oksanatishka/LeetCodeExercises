/**
 * @param {string} s
 * @return {boolean}
 */

// STACKS
// methods in js: push, pop, peek, length
// array as a stack

var validPalindrome = function(originalStr) {
    var isPalindrom = function(s) {
        var stackOfLetters = [];
        var reversedStr = '';
        // add letters of a string to a stack (array)

        for (var k = 0; k < s.length; k++) {
            stackOfLetters.push(s[k]);
        }

        for (var k = 0; k < s.length; k++) {
            reversedStr += stackOfLetters.pop();
        }
        return s == reversedStr;
    };

    var result = false;
    for (var k = 0; k < originalStr.length; k++) {
        var newStr = originalStr.substring(0, k - 1) + originalStr.substring(k, originalStr.length);
        // console.log(newStr);

        result = isPalindrom(newStr);
    }

    if (result) {
        return originalStr + ' is a palindrome.';
    } else {
        return originalStr + ' is not a palindrome.';
    }
};

console.log(validPalindrome('abc')); // true
console.log(validPalindrome('abca')); // true    // You could delete the character 'c'.
console.log(validPalindrome('abfga')); // false
