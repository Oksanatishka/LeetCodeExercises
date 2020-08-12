// var sumDigitSquare = function(n) {
//     var sum = 0;
//     while (n > 0) {
//         var rem = n % 10;
//         sum += rem * rem;
//         n = n / 10;
//     }
//     return sum;
// };

// var isHappy = function(n) {
//     var hashTable = {};

//     while (true) {
//         if (n == 1) return true;

//         hashTable[n] = sumDigitSquare(n);

//         if (hashTable.containsKey(n) && n != hashTable.toArray()[hashTable.size() - 1])
//             return false;
//     }
// };

console.log(isHappy(19)); // true
console.log(isHappy(2));
