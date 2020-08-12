/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    var i = 1;
    var result = 1;
    if (n == 0) {
        return false;
    }
    if (n == 1) {
        return true;
    }

    while (result <= n) {
        var j = 1;
        while (j <= i) {
            result *= 3;
            if (result == n) {
                return true;
            }
            j++;
        }
        i++;
    }
    return false;
};

console.log(isPowerOfThree(27)); // true
console.log(isPowerOfThree(0)); // false
console.log(isPowerOfThree(9)); // true
console.log(isPowerOfThree(45)); // false
