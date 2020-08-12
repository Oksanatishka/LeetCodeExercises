/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    // 0, 10,11
    for (var i = 0; i < bits.length; i++) {
        if (bits[i] == 1) {
            i++;
            if (i == bits.length - 1) {
                return false;
            }
        }
    }
    return true;
};

console.log(isOneBitCharacter([1, 0, 0])); //true          10, 0
console.log(isOneBitCharacter([1, 1, 1, 0])); //false      11,10
