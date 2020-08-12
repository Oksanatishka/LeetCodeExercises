/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits.length) return [];

    const keys = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };

    const result = [];
    let temp = '';

    function backtrack(temp, index) {
        if (index === digits.length) {
            result.push(temp);
            return;
        }

        for (let key of keys[digits[index]]) {
            backtrack(temp + key, index + 1);
        }
    }
    backtrack(temp, 0);
    return result;
};
console.log(letterCombinations('23')); //["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
