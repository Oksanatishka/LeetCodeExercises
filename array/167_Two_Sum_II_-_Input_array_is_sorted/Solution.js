/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var res = [];
    for (var i = 0; i < numbers.length; i++) {
        for (var k = i + 1; k < numbers.length; k++) {
            if (numbers[i] + numbers[k] == target) {
                i++;
                k++;
                res.push(i);
                res.push(k);
                return res;
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [1,2]
