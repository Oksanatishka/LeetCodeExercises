var longestPalindrome = function (s) {
    let res = '';
    let cur = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < i + 2; j++) {
            // it's (j < i + 2) to handle cases where two adjacent letters are equal, such as ‘cbb’.
            let left = i;
            let right = j;
            // console.log(left, right);
            while (s[left] && s[left] === s[right]) {
                cur = s.substring(left, right + 1);
                if (cur.length > res.length) res = cur;
                left--;
                right++;
            }
        }
    }
    return res;
};

console.log(longestPalindrome('babad')); //"bab" - Note: "aba" is also a valid answer.
// console.log(longestPalindrome('cbbd')); // "bb"
