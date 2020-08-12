/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var res = [];
    for (var k = 0; k <= 33; k++) {
        res[k] = [];
        for (var i = 0; i <= k; i++) {
            if (i == 0 || k == i) {
                res[k][i] = 1;
            } else {
                res[k][i] = res[k - 1][i] + res[k - 1][i - 1];
            }
        }
    }
    // console.log(res);
    return res[rowIndex];
};

console.log(getRow(3)); // [1,3,3,1]
