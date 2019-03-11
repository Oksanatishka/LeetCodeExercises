/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var res = [];
    for (var line = 0; line < numRows; line++) {
        res[line] = [];
        for (var i = 0; i <= line; i++) {
            if (i == 0 || line == i) {
                res[line][i] = 1;
            } else {
                res[line][i] = res[line - 1][i] + res[line - 1][i - 1];
            }
        }
    }
    return res;
};

console.log(generate(3));
console.log(generate(5));
