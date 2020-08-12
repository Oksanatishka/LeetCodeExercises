/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var hashTable = {};

    if (s.length != t.length) {
        return false;
    }

    for (var i = 0; i < s.length; i++) {
        hashTable[s[i]] = (hashTable[s[i]] || 0) + 1;
        hashTable[t[i]] = (hashTable[t[i]] || 0) - 1;
    }

    for (var c in hashTable) {
        if (hashTable[c] != 0) {
            return false;
        }
    }

    return true;
};

// var isAnagram = function(s, t) {
//     if (s.length !== t.length) return false;

//     let map = {};

//     for (let i = 0; i < s.length; i++) {
//         if (map[s[i]] === undefined) {
//             map[s[i]] = 1;
//         } else {
//             map[s[i]]++;
//         }
//     }

//     for (let j = 0; j < t.length; j++) {
//         if (map[t[j]] > 0) {
//             map[t[j]]--;
//         } else {
//             return false;
//         }
//     }
//     return true;
// };

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
