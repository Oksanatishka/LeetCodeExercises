/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var result = 0;
    var rem;
    while (num > 0) {
        rem = parseInt(num % 10);
        num = parseInt(num / 10);
        result += rem;
    }
    if (result > 9) {
        return addDigits(result);
    }
    return result;
};

console.log(addDigits(38)); // 2    (3+8=11, 1+1=2)
