/**
 * @param {string} s
 * @return {number}
 */

// Approach 3: Using Stack

// start by pushing -1 onto the stack.
// For every ‘(’ encountered, we push its index onto the stack.
// For every ‘)’ encountered, we pop the topmost element and subtract the current element's index from the top element of the stack, which gives the length of the currently encountered valid string of parentheses. If while popping the element, the stack becomes empty, we push the current element's index onto the stack. In this way, we keep on calculating the lengths of the valid substrings, and return the length of the longest valid string at the end.

// Time complexity : O(n). n is the length of the given string.
// Space complexity : O(n). The size of stack can go up to n.

var longestValidParentheses = function (s) {
    let max = 0;
    let stack = [];
    stack.push(-1);
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i); // [-1,0] -> [-1,2] -> [-1,2,3]
        } else {
            stack.pop(); // [-1] -> [-1,2]
            if (stack.length === 0) {
                stack.push(i);
            } else {
                max = Math.max(max, i - stack[stack.length - 1]); // [0, 0-(-1)]=1  ->  [1, 4-2]=2 -> result 2
            }
        }
    }
    return max;
};

// console.log(longestValidParentheses('(()')); // 2
// console.log(longestValidParentheses(')()())')); // 4
console.log(longestValidParentheses('()(()')); // 2

// Approach: dynamic programming
var longestValidParentheses = function (s) {
    let dp = Array(s.length); // continous valid parentheses up to that ith point.
    let max = 0;
    dp[0] = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') {
                dp[i] = (i - 2 >= 0 ? dp[i - 2] : 0) + 2;
            } else if (i - 1 - dp[i - 1] >= 0 && s[i - 1] === ')' && s[i - 1 - dp[i - 1]] === '(') {
                dp[i] =
                    dp[i - 1] + (i - 1 - 1 - dp[i - 1] >= 0 ? dp[i - 1 - 1 - dp[i - 1]] : 0) + 2;
            } else {
                dp[i] = 0;
            }
        } else {
            dp[i] = 0;
        }
        max = Math.max(max, dp[i]);
    }
    return max;
};
