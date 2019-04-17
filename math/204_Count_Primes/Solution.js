/**
 * @param {number} n
 * @return {number}
 */

var isPrime = function(n) {
    if (n <= 1) return false;
    for (var i = 2; i < n; i++) if (n % i == 0) return false;
    return true;
};

var countPrimes = function(n) {
    var count = 0;
    for (var i = 0; i < n; i++) {
        if (isPrime(i) == true) {
            count++;
        }
    }
    return count;
};

console.log(countPrimes(10)); //4       2, 3, 5, 7
console.log(countPrimes(20)); // 8      2, 3, 5, 7, 11, 13, 17, 19
console.log(countPrimes(30)); // 10     2, 3, 5, 7, 11, 13, 17, 19, 23, 29
console.log(countPrimes(50));
console.log(countPrimes(10000)); // 1229
// console.log(countPrimes(499979));
