/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) {
        return 0;
    }
    var profits = 0;
    for (var i = 1; i < prices.length; ++i) {
        if (prices[i] > prices[i - 1]) {
            profits += prices[i] - prices[i - 1];
        }
    }
    return profits;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7 (5-1+6-3)
console.log(maxProfit([1, 2, 3, 4, 5])); // 4 (5-1)
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
