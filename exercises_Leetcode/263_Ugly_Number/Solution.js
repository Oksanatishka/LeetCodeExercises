/**
 * @param {number} num
 * @return {boolean}
 */

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

var isUgly = function(num) {
    if (num == 0) {
        return false;
    }
    if (num == 1) {
        return true;
    }
    if (num % 2 == 0) {
        return isUgly(num / 2);
    }
    if (num % 3 == 0) {
        return isUgly(num / 3);
    }
    if (num % 5 == 0) {
        return isUgly(num / 5);
    }
    return false;
};

console.log(isUgly(6)); // true     2*3 = 6
console.log(isUgly(8)); // true     2*2*2 = 8
console.log(isUgly(14)); // false
