/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    var maxFrequency = 0;
    var smallestLengthOfElem = 0;
    var arr = [];
    if (nums.length == 1) {
        return 1;
    }
    for (var i = 0; i < nums.length; i++) {
        maxFrequency = 1;
        maxInt = nums[i];
        smallestLengthOfElem = 1;
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                maxFrequency++;
                smallestLengthOfElem = j - i + 1;
            }
        }
        arr[i] = [maxInt, maxFrequency, smallestLengthOfElem];
    }
    console.log(arr);

    //find max frequency
    var newArr = [];
    var maxF = arr[0][1];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][1] > maxF) {
            maxF = arr[i][1];
            newArr.push(arr[i]);
        }
        // if (newArr.length >0 && arr[0][1] == maxF)
    }
    // if (newArr.length > 0) {
    //     if (newArr[0][1] < arr[0][1]) {
    //         return arr[0][2];
    //     } else if (newArr[0][1] == arr[0][1]) {
    //         newArr.push(arr[0]);
    //     }
    // }

    // if (newArr.length == 0) {
    //     for (var i = 0; i < arr.length; i++) {
    //         var maxF = arr[0][1];
    //         if (arr[i][1] >= maxF) {
    //             maxF = arr[i][1];
    //             newArr.push(arr[i]);
    //         }
    //     }
    // }
    console.log('* ', newArr);

    //find min length
    if (newArr.length == 1) {
        return newArr[0][2];
    }

    if (newArr.length > 1) {
        for (var i = 1; i < newArr.length; i++) {
            var res = newArr[0][2];
            if (newArr[i][2] < res) {
                res = newArr[i][2];
            }
        }
        return res;
    }
    // console.log('newArr ', newArr);
};

console.log(findShortestSubArray([1, 2, 2, 3, 1])); // 2
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])); // 6
console.log(findShortestSubArray([1])); // 1
console.log(findShortestSubArray([1, 1])); // 2
console.log(findShortestSubArray([49999, 1, 1, 1, 2, 1])); // 5
// console.log(findShortestSubArray([32,41,21,29,7,53,97,76,71,53,53,53,72,53,53,14,22,53,67,53,53,53,54,98,53,46,53,53,62,53,76,20,60,53,31,53,53,53,95,27,53,53,53,53,36,59,40,53,53,64,53,53,53,21,53,51,53,53,2,53,53,53,53,53,50,53,53,53,23,88,3,53,61,19,53,68,53,35,42,53,53,48,34,54,53,75,53,53,50,44,92,41,71,53,53,82,53,53,14,53])); // 95
console.log(
    findShortestSubArray([
        32,
        41,
        21,
        29,
        7,
        53,
        97,
        76,
        71,
        53,
        53,
        53,
        72,
        53,
        53,
        14,
        22,
        53,
        67,
        53,
        53,
        53,
        54,
        98,
        53,
        46,
        53,
        53,
        62,
        53,
        76,
        20,
        60,
        53,
        31,
        53,
        53,
        53,
        95,
        27,
        53,
        53,
        53,
        53,
        36,
        59,
        40,
        53,
        53,
        64,
        53,
        53,
        53,
        21,
        53,
        51,
        53,
        53,
        2,
        53,
        53,
        53,
        53,
        53,
        50,
        53,
        53,
        53,
        23,
        88,
        3,
        53,
        61,
        19,
        53,
        68,
        53,
        35,
        42,
        53,
        53,
        48,
        34,
        54,
        53,
        75,
        53,
        53,
        50,
        44,
        92,
        41,
        71,
        53,
        53,
        82,
        53,
        53,
        14,
        53
    ])
); // 95
