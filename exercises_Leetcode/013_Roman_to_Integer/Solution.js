/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var StackOfChar = [];
    var result = 0;

    for (var i = 0; i < s.length; i++) {
        StackOfChar.push(s[i]);
    }
    for (var i = 0; i < StackOfChar.length; i++) {
        if (StackOfChar[i] == 'I') {
            result += 1;
        } else if (StackOfChar[i] == 'V') {
            if (StackOfChar[i - 1] == 'I') {
                result += 3;
            } else {
                result += 5;
            }
        } else if (StackOfChar[i] == 'X') {
            if (StackOfChar[i - 1] == 'I') {
                result += 8;
            } else {
                result += 10;
            }
        } else if (StackOfChar[i] == 'L') {
            if (StackOfChar[i - 1] == 'X') {
                result += 30;
            } else {
                result += 50;
            }
        } else if (StackOfChar[i] == 'C') {
            if (StackOfChar[i - 1] == 'X') {
                result += 80;
            } else {
                result += 100;
            }
        } else if (StackOfChar[i] == 'D') {
            if (StackOfChar[i - 1] == 'C') {
                result += 300;
            } else {
                result += 500;
            }
        } else if (StackOfChar[i] == 'M') {
            if (StackOfChar[i - 1] == 'C') {
                result += 800;
            } else {
                result += 1000;
            }
        }
    }
    // console.log(StackOfChar);
    return result;
};

console.log(romanToInt('III')); // 3
console.log(romanToInt('IV')); // 4
console.log(romanToInt('IX')); // 9
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
