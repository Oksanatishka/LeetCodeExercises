/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    var i = 1;
    var result = 1;
    if (n == 1) {
        return true;
    }
    while (result <= n) {
        var j = 1;
        while (j <= i) {
            result *= 2;
            j++;
            // console.log('result ', result);
            if (result == n) {
                return true;
            }
        }

        i++;
    }
    return false;
};

console.log(isPowerOfTwo(1)); // true 2^0 = 1
console.log(isPowerOfTwo(16)); // true 2^4 = 16
console.log(isPowerOfTwo(218)); // false
