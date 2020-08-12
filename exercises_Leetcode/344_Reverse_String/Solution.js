/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    return s.reverse();
};

// Approach: Using ES6
var reverseString_1 = function (s) {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
};

// Approach: Recursion

// algorithm:
// - take the leading character str[0] from the input string.
// - call the function itself on the remaining substring, i.e. reverseString(str[1...n-1]).
// - then append the leading character to the result returned in the step (2).

var reverseString_3 = function (s) {
    if (s.length == 0) {
        return;
    }
    var temp = s[0];
    s.shift();
    reverseString(s);
    s.push(temp);
};

// algorithm:
// - (1)Take the leading and trailing characters from the input string, i.e. str[0] and str[n-1].
// - (2)Swap the leading and trailing characters in place.
// - (3)Call the function recursively to reverse the remaining substring, i.e. reverseString(str[1...n-2]).
// Note that you can actually swap the order of steps (2) and (3), since they are independent tasks. Yet, it is better to keep them in this order, since this way we can use the optimization called tail recursion.
var reverseString_4 = function (s) {
    const helper = (start, end, str) => {
        if (start >= end) return;
        [s[start], s[end]] = [s[end], s[start]]; // swap between the first and the last elements.
        helper(start + 1, end - 1, s);
    };
    helper(0, s.length - 1, s);
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); // ["o","l","l","e","h"]
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])); // ["h","a","n","n","a","H"]
