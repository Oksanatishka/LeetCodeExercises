/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var sum = 0;
    var rem;
    // If the number is not happy number it will end at '4'.
    while (sum != 1 && sum != 4) {
        sum = 0;
        while (n > 0) {
            rem = parseInt(n % 10);
            sum += rem * rem;
            n = parseInt(n / 10);
        }
        n = sum;
    }
    if (sum == 1) {
        return true;
    } else {
        return false;
    }
};

console.log(isHappy(19)); // true
console.log(isHappy(2));
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1
