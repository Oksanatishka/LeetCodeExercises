/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs != 0) {
        var prefix = strs[0];
        for (var i = 1; i < strs.length; i++) {
            for (var j = 0; j < prefix.length; j++) {
                if (prefix[j] != strs[i][j]) {
                    prefix = prefix.slice(0, j);
                    break;
                }
            }
        }
        return prefix;
    }
    return '';
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // "fl"
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ""
// console.log(longestCommonPrefix([])); // ""
