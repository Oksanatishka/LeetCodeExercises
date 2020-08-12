/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    // var isSorted = false;
    // var count =0;
    // var unsortedArr = []
    // for (var i=0;i<nums.length;i++){
    //     if(nums[i]<nums[i+1]){
    //         isSorted = true
    //     } else {
    //         unsortedArr.push(nums[i])
    //     }
    // }
    var initialArr = nums;
    // var sortedArr = nums.sort((a, b) => a - b);
    var lowIndex = 0;
    // var highIndex = 0;
    var indexArr = [];

    console.log('nums', nums);
    console.log('initialArr', initialArr);
    // console.log('sortedArr', sortedArr);
    var i = 0;
    var j = 0;
    // while (i < sortedArr.length) {
    //     while (j < initialArr.length) {
    //         console.log('sortedArr[i] ', sortedArr[i]);
    //         console.log('initialArr[j] ', initialArr[j]);
    //         console.log('------');
    //         if (sortedArr[i] != initialArr[j]) {
    //             lowIndex = j;
    //             indexArr.push(lowIndex);
    //         }
    //         i++;
    //         j++;
    //     }
    // }
    // console.log(indexArr);
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])); // 5    [6, 4, 8, 10, 9]
