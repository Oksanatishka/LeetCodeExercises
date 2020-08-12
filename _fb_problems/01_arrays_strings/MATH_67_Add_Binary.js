/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    var decimal = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
    return decimal.toString(2);
};

console.log(addBinary('11', '1')); //"100"
console.log(addBinary('1010', '1011')); //"10101"

// Approach: Bit-by-Bit Computation
function binaryAddition(a, b) {
    var result = '',
        carry = 0;

    while (a || b || carry) {
        let sum = +a.slice(-1) + +b.slice(-1) + carry; // get last digit from each number and sum

        if (sum > 1) {
            result = (sum % 2) + result;
            carry = 1;
        } else {
            result = sum + result;
            carry = 0;
        }

        // trim last digit (110 -> 11)
        a = a.slice(0, -1);
        b = b.slice(0, -1);
    }

    return result;
}

console.log(binaryAddition('11', '1')); //"100"
console.log(binaryAddition('1010', '1011')); //"10101"
