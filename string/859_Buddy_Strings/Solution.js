/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if (A.length !== B.length) {
        return false;
    }

    let letters = [];

    for (let i = 0; i < A.length; i++) {
        // if A != B, then we only allows it to have one swap.
        if (A[i] !== B[i]) {
            letters.push([A[i], B[i]]);
        }
        // if detects more than 2 different pair, return false.
        if (letters.length > 2) {
            return false;
        }
    }

    // console.log('letters ', letters);
    if (letters.length == 2) {
        return letters[0][0] == letters[1][1] && letters[0][1] == letters[1][0];
    } else if (letters.length == 1) {
        return false;
    } else {
        // Checking for duplicate letters in case when strings are the same
        let char = new Set(A.split(''));
        // console.log('char ', char);
        return char.size < A.length;
    }
};

console.log(buddyStrings('ab', 'ba')); // true
console.log(buddyStrings('ab', 'ab')); // false
console.log(buddyStrings('aa', 'aa')); // true
console.log(buddyStrings('aaaaaaabc', 'aaaaaaacb')); // true
console.log(buddyStrings('abab', 'abab')); // true
console.log(buddyStrings('abcaa', 'abcbb')); // false
