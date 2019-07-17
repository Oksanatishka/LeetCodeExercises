/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for (let i = 1; i <= s.length / 2; i++) {
        if (s.length % i == 0) {
            if (s.substr(0, i).repeat(s.length / i) == s) {
                return true;
            }
        }
    }
    return false;
};

console.log(repeatedSubstringPattern('abab')); // true
console.log(repeatedSubstringPattern('aba')); // false
console.log(repeatedSubstringPattern('abcabcabcabc')); // true
