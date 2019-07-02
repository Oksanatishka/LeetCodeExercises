/**
 * @param {string} word
 * @return {boolean}
 */

// 1. All letters in this word are capitals, like "USA".
// 2. All letters in this word are not capitals, like "leetcode".
// 3. Only the first letter in this word is capital, like "Google".

var detectCapitalUse = function(word) {
    if (word === word.toUpperCase()) {
        return true;
    } else if (word === word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) {
        return true;
    } else if (word === word.toLowerCase()) {
        return true;
    }

    return false;
};

console.log(detectCapitalUse('USA')); // true
console.log(detectCapitalUse('FlaG')); // false
console.log(detectCapitalUse('Flag')); // false
