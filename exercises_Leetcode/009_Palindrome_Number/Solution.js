/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var reversedNum;
    var myNum = x + '';
    var rev;

    if (x < 0) {
        return false;
    }
    reversedNum = myNum
        .split('')
        .reverse()
        .join('');

    rev = Number(reversedNum);
    return x == rev ? true : false;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
