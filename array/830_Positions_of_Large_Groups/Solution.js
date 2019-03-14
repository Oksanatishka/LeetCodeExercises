/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    var resultArr = [];
    // console.log(S.length);
    for (var i = 0; i < S.length; i++) {
        var count = 1;
        for (var j = i + 1; j < S.length; j++) {
            // console.log('S[i] ', S[i]);
            // console.log('S[j] ', S[j]);
            if (S[i] == S[j]) {
                count++;
            } else {
                break;
            }
        }
        if (count >= 3) {
            resultArr.push([i, j - 1]);
            i = j - 1;
        }
    }
    return resultArr;
};

console.log(largeGroupPositions('abbxxxxzzy')); //[[3,6]]
console.log(largeGroupPositions('abc')); //[]
console.log(largeGroupPositions('abcdddeeeeaabbbcd')); //[[3,5],[6,9],[12,14]]
