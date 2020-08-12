/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    for (var i = 0; i <= x; i++) {
        if (i * i == x) {
            return i;
        }
        if (i * i > x) {
            return i - 1;
        }
    }
};

console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2    (2.82842...)
