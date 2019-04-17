// https://www.interviewbit.com/problems/pascal-triangle/

// Given numRows, generate the first numRows of Pascal’s triangle.

// Pascal’s triangle : To generate A[C] in row R, sum up A’[C] and A’[C-1] from previous row R - 1.

// Example:

// Given numRows = 5,

// Return

// [
//      [1],
//      [1,1],
//      [1,2,1],
//      [1,3,3,1],
//      [1,4,6,4,1]
// ]

function solution(numRows) {
    if (numRows === 0) {
        return [];
    }
    var result = [[1]];
    for (var i = 1; i < numRows; i++) {
        result[i] = [];
        for (var j = 0; j < i + 1; j++) {
            result[i][j] = (result[i - 1][j] || 0) + (result[i - 1][j - 1] || 0);
        }
    }
    return result;
    // return [];
}

test('my test', () => {
    // expect(1).toEqual(2);
    expect(solution(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
    expect(solution(0)).toEqual([]);
    expect(solution(6)).toEqual([
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
        [1, 5, 10, 10, 5, 1]
    ]);
});
