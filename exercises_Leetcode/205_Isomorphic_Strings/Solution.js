/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isIsomorphic = function(s, t) {
//     var hashTable = {};

//     if (s.length != t.length) {
//         return false;
//     }
//     for (var i = 0; i < s.length; i++) {
//         var value = s[i];
//         // var valueB = t[i];
//         if (hashTable[value]) {
//             hashTable[value] = hashTable[value] + 1;
//         } else {
//             hashTable[value] = 1;
//         }
//     }
//     console.log(hashTable);
//     var resultA = Object.values(hashTable);
// };

console.log(isIsomorphic('egg', 'add')); //true
console.log(isIsomorphic('foo', 'bar')); //false
console.log(isIsomorphic('paper', 'title')); //true
