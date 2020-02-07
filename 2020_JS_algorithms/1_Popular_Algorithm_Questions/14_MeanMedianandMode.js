// Given an array of numbers, calculate the mean, median, and mode.

// The "mean" is the "average" you're used to, where you add up all the numbers and then divide by the number of numbers.
// The "median" is the "middle" value in the list of numbers.
// The "mode" is the value that occurs most often.

class MMM {
    constructor(array) {
        this.array = array;
    }
    // linear time and constant space
    mean() {
        return (this.array.reduce((acc, el) => acc + el) / this.array.length).toFixed(2);
    }
    median() {
        if (this.array.length % 2 === 0) {
            return (this.array[this.array.length / 2] + this.array[this.array.length / 2 - 1]) / 2;
        } else {
            return this.array[Math.floor(this.array.length / 2)];
        }
    }
    // linear time and space complexity.
    mode() {
        const obj = {};
        this.array.forEach(element => {
            obj[element] = obj[element] ? obj[element] + 1 : 1;
        });

        let modes = [];
        let max = 0;
        for (const key in obj) {
            const value = parseFloat(key);
            const count = obj[key];
            if (count > max) {
                modes = [value];
                max = count;
            } else if (count === max) modes.push(value);
        }

        if (modes.length === Object.keys(obj).length) modes = [];

        return modes;
    }
}

const mmm1 = new MMM([1, 2, 3, 4, 4, 5, 5]);
console.log(mmm1.mean() + ',', mmm1.median() + ',', mmm1.mode());
const mmm2 = new MMM([1, 1, 2, 2, 3, 3, 4, 4]);
console.log(mmm2.mean() + ',', mmm2.median() + ',', mmm2.mode());

// function mmm(nums) {
//     let mean = (nums.reduce((acc, el) => acc + el) / nums.length).toFixed(2); // linear time and constant space
//     let median;
//     if (nums.length % 2 === 0) {
//         median = (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2;
//     } else {
//         median = nums[Math.floor(nums.length / 2)];
//     }
//     let obj = {};
//     for (let num in nums) {
//         obj[nums[num]] = obj[nums[num]] ? obj[nums[num]] + 1 : 1;
//     }

//     console.log(mean, median, mode);
// }
// console.log(mmm([1, 2, 3, 4, 4, 5, 5])); //3.43, 4, [4, 5]
// console.log(mmm([1, 1, 2, 2, 3, 3, 4, 4])); //2.5, 2.5, []
