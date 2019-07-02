/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// reverse the first k characters for every 2k characters counting from the start of the string.
var reverseStr = function(s, k) {
    let arr = s.split(''); //   [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
    let resultArr = [];
    var initialK = k;
    for (let i = 0; i < arr.length; i++) {
        let subArrReversed = arr.slice(i, k).reverse(); // [ 'b', 'a' ]

        resultArr.push(subArrReversed); // [ [ 'b', 'a' ] ]

        i = i + initialK;

        k = k + initialK;

        let subArr = arr.slice(i, k);
        // console.log('subArr ', subArr);
        resultArr.push(subArr);

        i = i + initialK - 1;

        k = k + initialK;
    }

    return resultArr.join(',').replace(/,/g, '');
};

console.log(reverseStr('abcdefg', 2)); //  "bacdfeg"
