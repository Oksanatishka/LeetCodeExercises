/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    // Solution 1. one row solution

    // Syntax: number.toString(radix)
    // where radix
    // 2 - The number will show as a binary value
    // 8 - The number will show as an octal value
    // 16 - The number will show as an hexadecimal value
    return num >= 0 ? num.toString(16) : (Math.pow(2, 32) + num).toString(16);

    // Solution 2. hash map
    // if (num === 0) return '0';
    // const numMap = {
    //     '10': 'a',
    //     '11': 'b',
    //     '12': 'c',
    //     '13': 'd',
    //     '14': 'e',
    //     '15': 'f'
    // };
    // let result = [];
    // let isNegative = false;
    // if (num < 0) {
    //     isNegative = true;
    //     num = -num - 1;
    // }
    // while (num > 0) {
    //     result.push(num % 16);
    //     num = Math.floor(num / 16);
    // }
    // if (isNegative) {
    //     result = result.map(num => {
    //         num = 15 - num;
    //         if (num >= 10) {
    //             return numMap[num];
    //         } else {
    //             return num;
    //         }
    //     });
    //     for (let i = result.length; i < 8; ++i) {
    //         result.push('f');
    //     }
    // } else {
    //     result = result.map(num => {
    //         if (num >= 10) {
    //             return numMap[num];
    //         } else {
    //             return num;
    //         }
    //     });
    // }
    // return result.reverse().join('');

    // Solution 3. bitwise

    // if (num === 0) {
    //     return '0';
    // }
    // var words = '0123456789abcdef';
    // var res = '';
    // while (num !== 0) {
    //     res = words[num & 0xf] + res;
    //     num >>>= 4;
    // }
    // return res;
};

console.log(toHex(26)); // 1a
console.log(toHex(-1)); // ffffffff
console.log(toHex(0)); // 0
console.log(toHex(1)); // 1
console.log(toHex(10)); // a
console.log(toHex(-2)); // "fffffffe"
console.log(toHex(-10)); // "fffffff6"

// Below is a wrong solution - doesn't work for all cases
// var arr = [];
// var rem = 0;
// var sign = 1;
// if (num < 0) {
//     sign = -1;
//     num = num * -1;
// }
// if (num == 0) {
//     return '0';
// }
// // console.log('sign', sign);
// while (num > 0) {
//     rem = num % 16;
//     num = parseInt(num / 16);
//     // console.log('REM', rem);
//     // console.log('sign', sign);
//     if (sign == -1) {
//         rem = 15 - rem + 1;
//     }
//     // if (sign == 1) {
//     if (rem >= 0 && rem <= 9) {
//         arr.unshift(rem);
//     } else if (rem == 10) {
//         arr.unshift('a');
//     } else if (rem == 11) {
//         arr.unshift('b');
//     } else if (rem == 12) {
//         arr.unshift('c');
//     } else if (rem == 13) {
//         arr.unshift('d');
//     } else if (rem == 14) {
//         arr.unshift('e');
//     } else if (rem == 15) {
//         arr.unshift('f');
//     }
//     // }
// }
// if (sign == -1) {
//     for (var i = 0; i < 8; i++) {
//         if (arr[i] == null) {
//             arr[i] = 'f';
//         }
//     }
//     arr.reverse();
// }
// return arr.join('');
