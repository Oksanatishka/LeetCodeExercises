/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let sum = '';
    let carry = 0;

    while (i >= 0 || j >= 0 || carry > 0) {
        let a = 0;
        let b = 0;

        if (i >= 0) {
            a = num1.charCodeAt(i) - 48;
            i--;
        }
        if (j >= 0) {
            b = num2.charCodeAt(j) - 48;
            j--;
        }

        sum = String.fromCharCode(((a + b + carry) % 10) + 48) + sum;
        carry = Math.floor((a + b + carry) / 10);
    }
    return sum;
};

console.log(addStrings('2', '3')); //5
