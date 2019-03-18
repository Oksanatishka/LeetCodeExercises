/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    var newArr = [[]];

    for (var i = 0; i < A.length; i++) {
        for (var j = 0; j < A[i].length; j++) {
            // newArr[j][i] = j;
            newArr[j].push(A[i][j]);
        }
    }
    return newArr;
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); //  [[1,4,7],[2,5,8],[3,6,9]]
console.log(transpose([[1, 2, 3], [4, 5, 6]])); //  [[1,4],[2,5],[3,6]]
