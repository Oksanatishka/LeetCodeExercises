/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b != 0) {
        var carry = a & b; // carry now contains common set bits of a and b
        a = a ^ b; // Sum of bits of a and b where at least one of the bits is not set
        b = carry << 1; // Carry is shifted by one so that adding it to a gives the required sum
    }
    return a;
};

console.log(getSum(1, 2)); // 3     0001 + 0010 = 0011
console.log(getSum(-2, 3)); // 1    0010 + 0011 = 0100 ??

// 0001
// 0010
// ----
// carry = 0000
// a = 0011 --> result
// b = 0000
