/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var arr = ['1'];

    for (let i = 1; i < n; i++) {
        var currNumberArr = arr[i - 1].split(''); // ['1']
        var newValue;
        var currNumber = currNumberArr[0]; // '1'
        var counter = 0;
        var result = [];
        // 21 -> 1211
        // console.log('currNumberArr', currNumberArr);
        for (let j = 0; j <= currNumberArr.length; j++) {
            // console.log({ currNumber, 'currNumberArr[j]': currNumberArr[j] });
            if (currNumber === currNumberArr[j] && j !== currNumberArr.length) {
                counter++;
                // console.log('counter++', counter);
            } else {
                result.push(String(counter));
                result.push(currNumber);
                counter = 1;
                currNumber = currNumberArr[j];
                // console.log('temp result', result);
                // console.log('temp currNumber', currNumber);
            }
        }
        // console.log('result = ', result);
        arr.push(result.join('')); // ['1', '1'] -> '11'
    }
    return arr[n - 1];
};

console.log(countAndSay(3)); // "1"
console.log(countAndSay(4)); // "1211"
console.log(countAndSay(5)); // "111221"

// 1.     1             // 1 is read off as "one 1" or 11.
// 2.     11            // 11 is read off as "two 1s" or 21.
// 3.     21            // 21 is read off as "one 2, then one 1" or 1211.
// 4.     1211
// 5.     111221
