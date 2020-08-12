/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(' ');
    // console.log('The array is ', arr);
    let count = 0;

    while (arr[arr.length - 1] === '') {
        arr.pop();
    }
    // console.log('Last element of the array is ', arr[arr.length - 1]);
    if (arr.length - 1 >= 0) {
        for (let i = 0; i < arr[arr.length - 1].length; i++) {
            count++;
        }
    }

    return count;
};

console.log(lengthOfLastWord('Hello World')); // 5
console.log(lengthOfLastWord('a')); // 1
console.log(lengthOfLastWord('a  ')); // 1
console.log(lengthOfLastWord('')); // 0
