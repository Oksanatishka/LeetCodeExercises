/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    // var res = 4;
    // if (num == 1) {
    //     return true;
    // }
    // while (res <= num) {
    //     if (res == num) {
    //         return true;
    //     }
    //     res *= 4;
    // }
    // return false;

    var count0 = 0;
    var count1 = 0;
    while (num > 0) {
        if ((num & 1) == 1) {
            count1++;
        } else {
            count0++;
        }
        num >>= 1;
    }
    return count1 == 1 && count0 % 2 == 0;
};

console.log(isPowerOfFour(1)); // true
console.log(isPowerOfFour(16)); // true
console.log(isPowerOfFour(5)); // false
console.log(isPowerOfFour(-2147483648)); //false

// 0001         1
// 0100         4
// 0001 0000    16
// 0100 0000    64
