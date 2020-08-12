/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf_ = function (nums) {
    // let output = [];
    // for (let i = 0; i < nums.length; i++) {
    //     let product = 1;
    //     for (let j = 0; j < nums.length; j++) {
    //         if (j !== i) {
    //             product *= nums[j];
    //         }
    //         output[i] = product;
    //     }
    // }
    // return output;
    // This Solution doesn't cover corner case when any element of aay equals zero
    // let product = nums.reduce((acc, el) => acc * el);
    // for (let i = 0; i < nums.length; i++) {
    //     nums[i] = product / nums[i];
    // }
    // return nums;
};

// Approach 1: Left and Right product lists
// Time complexity : O(N) where N represents the number of elements in the input array. We use one iteration to construct the array L, one to construct the array RR and one last to construct the answer array using L and R.
// Space complexity : O(N) used up by the two intermediate aays that we constructed to keep track of product of elements to the left and right.

// Algorithm
// 1.Initialize two empty arrays, L and R where for a given index i, L[i] would contain the product of all the numbers to the left of i and R[i] would contain the product of all the numbers to the right of i.
// 2.We would need two different loops to fill in values for the two arrays. For the array L, L[0]L[0] would be 1 since there are no elements to the left of the first element. For the rest of the elements, we simply use L[i] = L[i - 1] * nums[i - 1]L[i]=L[i−1]∗nums[i−1]. Remember that L[i] represents product of all the elements to the left of element at index i.
// 3.For the other array, we do the same thing but in reverse i.e. we start with the initial value of 1 in R[length - 1]R[length−1] where lengthlength is the number of elements in the array, and keep updating R[i] in reverse. Essentially, R[i] = R[i + 1] * nums[i + 1]R[i]=R[i+1]∗nums[i+1]. Remember that R[i] represents product of all the elements to the right of element at index i.
// 4.Once we have the two arrays set up properly, we simply iterate over the input array one element at a time, and for each element at index i, we find the product except self as L[i] * R[i]L[i]∗R[i].

var productExceptSelf = function (nums) {
    var output = [];
    var leftMult = 1;
    var rightMult = 1;
    for (var i = nums.length - 1; i >= 0; i--) {
        output[i] = rightMult; // 1, 4, 12, 24 -> 24, 12, 4, 1
        rightMult *= nums[i]; // 4 -> 12 -> 24 -> 24
    }
    // console.log(output);    // 24, 12, 4, 1 -> below: 24*1, 12*1, 4*2, 1*6
    for (var j = 0; j < nums.length; j++) {
        output[j] *= leftMult;
        leftMult *= nums[j]; // 1,2,6,24
    }
    return output;
};
// console.log(productExceptSelf([1, 2, 3, 4])); //[24,12,8,6]

// Approach: O(1) Space
// Time complexity : O(N) where N represents the number of elements in the input array. We use one iteration to construct the array L, one to update the array answer.
// Space complexity : O(1) since don't use any additional array for our computations. The problem statement mentions that using the answer array doesn't add to the space complexity.

// Algorithm
// 1.Initialize the empty answer array where for a given index i, answer[i] would contain the product of all the numbers to the left of i.
// 2.We construct the answer array the same way we constructed the L array in the previous approach. These two algorithms are exactly the same except that we are trying to save up on space.
// 3.The only change in this approach is that we don't explicitly build the R array from before. Instead, we simply use a variable to keep track of the running product of elements to the right and we keep updating the answer array by doing answer[i] = answer[i] * Ranswer[i]=answer[i]∗R. For a given index i, answer[i] contains the product of all the elements to the left and R would contain product of all the elements to the right. We then update R as R = R * nums[i]R=R∗nums[i]

var productExceptSelf_ON1 = function (nums) {
    let result = [1],
        right = 1;
    // Left list
    for (let i = 1; i < nums.length; i++) {
        result.push(result[i - 1] * nums[i - 1]); // 1,1 -> 1,1,2 -> left list: 1,1,2,6
    }
    // Right list * Left list
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = result[i] * right; // [1, 1, 2, 6] -> [1, 1, 8, 6] -> [1, 12, 8, 6] -> [24, 12, 8, 6]
        right *= nums[i]; // 4,12,24,24 -> right list: 1,4,12,24 (24,12,4,1)
    }
    return result;
};
console.log(productExceptSelf_ON1([1, 2, 3, 4])); //left list * right list = [24,12,8,6]
