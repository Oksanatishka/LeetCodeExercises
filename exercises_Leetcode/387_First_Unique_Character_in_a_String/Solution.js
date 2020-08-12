/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hashMap = {};

    for (let i = 0; i < s.length; i++) {
        hashMap[s[i]] = hashMap[s[i]]
            ? { counter: ++hashMap[s[i]].counter, index: i }
            : { counter: 1, index: i };
    }
    // console.log('hashMap ', hashMap);
    for (let i = 0; i < s.length; i++) {
        if (hashMap[s[i]].counter == 1) {
            return hashMap[s[i]].index;
        }
    }

    return -1;
};

console.log(firstUniqChar('leetcode')); // 0
console.log(firstUniqChar('loveleetcode')); // 2
