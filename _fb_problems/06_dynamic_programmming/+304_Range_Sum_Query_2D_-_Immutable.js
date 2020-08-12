// Approach 1: Brute Force

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    this.data = matrix;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    let sum = 0;
    for (let r = row1; r <= row2; r++) {
        for (let c = col1; c <= col2; c++) {
            sum += this.data[r][c];
        }
    }
    return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
