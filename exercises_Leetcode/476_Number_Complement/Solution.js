/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var str = num.toString(2);
    var result = '';
    for (var i = 0; i < str.length; i++) {
        result += str.charAt(i) === '0' ? '1' : '0';
    }
    // parseInt(string, radix)
    return parseInt(result, 2);
};

// var findComplement = function(num) {
//     num = num.toString(2).replace(/[0|1]/g, function (match) {
//         return Number(match) ^ 1;
//     });

//     return parseInt(num, 2);
// };

console.log(findComplement(5)); // 2    5 is 101 --> 010 is 2
console.log(findComplement(1)); // 0
