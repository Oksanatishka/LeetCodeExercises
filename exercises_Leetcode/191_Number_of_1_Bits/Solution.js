/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var count = 0;
    for (var i = 0; i < 32; i++) {
        if (n & (1 << i)) {
            count++;
        }
    }
    return count;
};

console.log(hammingWeight(00000000000000000000000000001011)); // 3
console.log(hammingWeight(00000000000000000000000010000000)); // 1
console.log(hammingWeight(11111111111111111111111111111101)); // 31 (???)
