/**
 * @param {string} s
 * @return {number}
 */

// 'Sliding Window' approach to problem solving
var lengthOfLongestSubstring = function(s) {
    let hashMap = {};
    let maxLength = 0;
    let length = 0;

    for (let i = 0; i < s.length; i++) {
        // console.log('hashMap[s[i]] ', hashMap[s[i]]);
        if (hashMap[s[i]] >= length) {
            // hashMap[s[i]] = undefined, .., .., 0=0, 1=1,
            length = ++hashMap[s[i]]; //{a: 1}, {b:2}
            // console.log('length ', length);
        }
        hashMap[s[i]] = i; // {a:0} {b:1} {c:2} {a:3} {b:4}
        // console.log('i ', i);
        maxLength = Math.max(maxLength, i - length + 1); // max(0, 0-0+1), max(1, 1-0+1), max(2, 2-0+1), max(3, 3-1+1), max(3,4-2+1)
        // console.log('maxLength ', maxLength);
    }
    // console.log(hashMap);
    return maxLength;
};

module.exports = lengthOfLongestSubstring;

// console.log(lengthOfLongestSubstring('abcabcbb')); // 3    "abc"
// console.log(lengthOfLongestSubstring('bbbbb')); // 1    "b"
// console.log(lengthOfLongestSubstring('pwwkew')); // 3    "wke"

// jest --watch LC100_isSameTree
// test('my test', () => {
//     expect(solution('abcabcbb')).toEqual(3);
//     expect(solution('bbbbb')).toEqual(1);
//     expect(solution('pwwkew')).toEqual(3);
// });
