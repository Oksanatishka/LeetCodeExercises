// Approach 1: Brute Force

// Time complexity : O(n^2).
// Space complexity : O(1).

var maxProfit = function (prices) {
    let maxprofit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            if (profit > maxprofit) maxprofit = profit;
        }
    }
    return maxprofit;
};

// Approach 2: One Pass

// Time complexity : O(n)O(n). Only a single pass is needed.
// Space complexity : O(1)O(1). Only two variables are used.

var maxProfit = function (prices) {
    let minprice = Number.MAX_VALUE;
    let maxprofit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minprice) minprice = prices[i];
        else if (prices[i] - minprice > maxprofit) maxprofit = prices[i] - minprice;
    }
    return maxprofit;
};
