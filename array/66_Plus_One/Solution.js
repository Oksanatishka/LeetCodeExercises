/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var newDigits = [];
    var intFromArr = 0;
    for (var i = 0; i < digits.length; i++) {
        intFromArr = intFromArr + digits[i] + '';
        // newDigits.push(digits[i]);
    }
    intFromArr = Number(intFromArr) + 1;
    // intFromArr = intFromArr + 1;
    console.log('intFromArr ', intFromArr);

    for (var k = 0; k <= digits.length; k++) {
        // while (intFromArr / 10 != 0) {
        var rem = intFromArr % 10; // 123 % 10 = 3,  12 % 10 = 2, 1 % 10 = 1
        rem = parseInt(rem, 10);
        intFromArr = intFromArr / 10; // 123 / 10 = 12, 12 / 10 = 1, 1 / 10 = 0
        newDigits.unshift(rem);
    }
    // console.log('newDigits[0] ', newDigits[0]);
    if (newDigits[0] == 0) {
        newDigits.shift();
    }

    // console.log('newDigits ' + newDigits);
    return newDigits;
    // console.log('intFromArr ' + intFromArr);
};

// console.log(plusOne([1, 2, 3])); // [1,2,4]
// console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
// console.log(plusOne([9])); // [1,0]
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])); // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
