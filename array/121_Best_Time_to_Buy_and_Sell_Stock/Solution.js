/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var max_prices = 0;
    var min_prices = 0;
    var profit = 0;
    var profitArr = [];
    var maxProfit = 0;

    var i = 0;
    while (i < prices.length) {
        min_prices = prices[i];
        var k = i + 1;
        while (k < prices.length) {
            if (prices[k] > min_prices) {
                max_prices = prices[k];
                profit = max_prices - min_prices;
                profitArr.push(profit);
                // console.log(profitArr);
            }
            k++;
        }
        i++;
    }
    for (var j = 0; j < profitArr.length; j++) {
        if (profitArr[j] > maxProfit) {
            maxProfit = profitArr[j];
        }
    }
    return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log('---------------');
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log('---------------');
console.log(maxProfit([1, 2])); // 1
