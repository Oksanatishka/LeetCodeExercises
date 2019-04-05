/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var negative = 1;
    var result = 0;
    var rem;

    if (x < 0) {
        x *= -1;
        negative = -1;
    }
    while (x > 0) {
        rem = parseInt(x % 10);
        x = parseInt(x / 10);
        result = result * 10 + rem;
    }
    if (result < -2147483648 || result > 2147483647) {
        return 0;
    }
    return result * negative;
};

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(1534236469)); // 0
