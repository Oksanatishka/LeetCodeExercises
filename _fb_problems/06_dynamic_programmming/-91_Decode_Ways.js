/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (!s) {
        return 0;
    }
    let dp = Array(s.length + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] === '0' ? 0 : 1; // [0,0,0] -> [1,1,0]
    for (let i = 2; i <= s.length; i++) {
        let oneDigit = Number(s[i - 1]); // oneDigit = 2, twoDigits = 12
        let twoDigits = Number(s.substring(i - 2, i));
        // console.log(i, oneDigit, twoDigits)
        // console.log(dp)
        if (oneDigit >= 1 && oneDigit <= 9) {
            dp[i] += dp[i - 1]; // [0,0,0] -> [1,1,0] -> [1,1,2]
        }
        if (twoDigits >= 10 && twoDigits <= 26) {
            dp[i] += dp[i - 2]; // [0,0,0] -> [1,1,0]
        }
    }
    console.log(dp);
    return dp[s.length]; // вывести последний элемент dp массива
};

// Approach 1: Recursive Approach with Memoization
// Approach 2: Iterative Approach

// TESTS
console.log(numDecodings('12')); // 2    - "AB" (1 2) or "L" (12)
console.log(numDecodings('226')); // 3    - "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6)
