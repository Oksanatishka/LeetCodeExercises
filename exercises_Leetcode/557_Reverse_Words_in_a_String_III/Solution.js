/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i]
            .split('')
            .reverse()
            .join('');
    }

    return arr.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest")); //"s'teL ekat edoCteeL tsetnoc"
