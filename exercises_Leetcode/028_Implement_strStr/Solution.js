/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let diff = haystack.length - needle.length;

    for (let i = 0; i <= diff; i++) {
        if (needle === haystack.slice(i, i + needle.length)) {
            return i;
        }
    }
    // return -1;
    return haystack === needle ? 0 : -1;
};

console.log(strStr('hello', 'll')); // 2
console.log(strStr('aaaaa', 'bba')); // -1
