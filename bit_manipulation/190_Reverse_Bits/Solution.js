/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

// reverse - это в обратном порядке

// right shift operator (">>") it keeps sign bit intact i.e. if original number is negative then
// it will remain negative even after right shift i.e. first or most significant bit never lost,
// doesn't matter how many times you shift.

// unsigned right shift operator (">>>") doesn't preserve sign of original number and fills the new
// place with zero, that's why it's known as unsigned right shift operator or simply right shift with zero fill.

var reverseBits = function(n) {
    var reversed = 0;
    for (var i = 0; i < 32; i++) {
        reversed = (reversed << 1) | (n & 1);
        n >>>= 1;
    }

    return reversed >>> 0;
};

console.log(reverseBits(00000010100101000001111010011100)); // 00111001011110000010100101000000
console.log(reverseBits(11111111111111111111111111111101)); // 10111111111111111111111111111111
