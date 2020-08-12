/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
// var wordPattern = function(pattern, str) {
//     var hashTable = {};
//     var str = str.split(' ');

//     if (pattern.length != str.length) {
//         return false;
//     }
//     for (var i = 0; i < str.length; i++) {
//         if (hashTable[pattern[i]]) {
//             if (hashTable[pattern[i]] != str[i]) {
//                 return false;
//             }
//         } else {
//             if (Object.values(hashTable).indexOf(str[i]) != -1) {
//                 return false;
//             } else {
//                 hashTable[pattern[i]] = str[i];
//             }
//         }
//     }
//     return true;
// };

var wordPattern = function(pattern, str) {
    var hashPattern = {};
    var hashStr = {};

    pattern = pattern.split('');
    str = str.split(' ');

    if (pattern.length != str.length) {
        return false;
    }
    for (var i = 0; i < pattern.length; i++) {
        if (hashPattern[pattern[i]] && hashPattern[pattern[i]] != str[i]) {
            return false;
        }
        if (hashStr[str[i]] && hashStr[str[i]] != pattern[i]) {
            return false;
        }
        hashPattern[pattern[i]] = str[i];
        hashStr[str[i]] = pattern[i];
    }
    return true;
};

console.log(wordPattern('abba', 'dog cat cat dog')); // true
console.log(wordPattern('abba', 'dog cat cat fish')); // false
console.log(wordPattern('aaaa', 'dog cat cat dog')); // false
console.log(wordPattern('abba', 'dog dog dog dog')); // false
