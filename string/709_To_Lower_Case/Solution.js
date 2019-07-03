/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    // return str.toLowerCase();
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            let lowerChar = str.charCodeAt(i) + 32;
            arr.push(String.fromCharCode(lowerChar));
        } else {
            arr.push(str[i]);
        }
    }
    return arr.join('');
};

console.log(toLowerCase('Hello')); // "hello"
console.log(toLowerCase('here')); // "here"
console.log(toLowerCase('LOVELY')); // "lovely"
console.log(toLowerCase('PiTAs')); // "lovely"
