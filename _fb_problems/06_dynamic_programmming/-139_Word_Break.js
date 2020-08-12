/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// Не работает для edge cases
// var wordBreak = function (s, wordDict) {
//     let newS = s;
//     for (let i = 0; i < wordDict.length; i++) {
//         let splitted = newS.includes(wordDict[i]);
//         if (splitted) {
//             let regex = new RegExp(wordDict[i], 'g'); // нужно использовать new RegExp чтоб воспользоваться переменной
//             newS = newS.replace(regex, ''); // replaceAll() не работает, но replace() работает как replaceAll если использовать regex
//         }
//     }
//     if (newS.length === 0) return true;
//     return false;
// };

// Approach 1: Brute Force -  using recursion and backtracking
var wordBreak_2 = function (s, wordDict) {
    const word_Break = (s, wordDict, start) => {
        if (start == s.length) {
            return true;
        }
        for (let end = start + 1; end <= s.length; end++) {
            if (wordDict.includes(s.substring(start, end)) && word_Break(s, wordDict, end)) {
                return true;
            }
        }
        return false;
    };
    return word_Break(s, wordDict, 0);
};

// TESTS

// console.log(wordBreak('leetcode', ['leet', 'code'])); // true -  because "leetcode" can be segmented as "leet code".
// console.log(wordBreak('applepenapple', ['apple', 'pen'])); // true -  because "applepenapple" can be segmented as "apple pen apple".
// console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])); // false

console.log(wordBreak_2('leetcode', ['leet', 'code'])); // true -  because "leetcode" can be segmented as "leet code".
console.log(wordBreak_2('applepenapple', ['apple', 'pen'])); // true -  because "applepenapple" can be segmented as "apple pen apple".
console.log(wordBreak_2('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])); // false

// Approach 1: Brute Force
// Approach 2: Recursion with memoization
// Approach 3: Using Breadth-First-Search
// Approach 4: Using Dynamic Programming
