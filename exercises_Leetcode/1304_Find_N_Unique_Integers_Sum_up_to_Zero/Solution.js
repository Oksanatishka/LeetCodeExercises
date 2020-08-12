/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    if (n == 1) return [0];
    let result = [];
    if (n % 2 != 0) {
        result.push(0);
    }
    for (let i = 1; i <= n / 2; i++) {
        result.push(i, -i);
    }
    return result;
};

// 1 <= n <= 1000
console.log(sumZero(5)); // [-7,-1,1,3,4], [-5,-1,1,2,3] , [-3,-1,2,-2,4]
console.log(sumZero(3)); // [-1,0,1]
console.log(sumZero(1)); // [0]
