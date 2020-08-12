/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    let count = 0;
    for (let i = 1; i <= N; i++) {
        // console.log('i ', i);
        if (i > 10) {
            let initialNumber = i;
            let digitsArr = i.toString().split('');
            let isAllRotated = false;
            // console.log('digitsArr ', digitsArr);
            let newNumArr = [];
            for (let j = 0; j < digitsArr.length; j++) {
                isAllRotated = false;

                if (
                    digitsArr[j] == 2 ||
                    digitsArr[j] == 5 ||
                    digitsArr[j] == 6 ||
                    digitsArr[j] == 9
                ) {
                    isAllRotated = true;
                    if (digitsArr[j] == 2) {
                        digitsArr[j] = '5';
                    } else if (digitsArr[j] == 5) {
                        digitsArr[j] = '2';
                    } else if (digitsArr[j] == 6) {
                        digitsArr[j] = '9';
                    } else if (digitsArr[j] == 9) {
                        digitsArr[j] = '6';
                    }
                    newNumArr.push(digitsArr[j]);
                    // console.log('digitsArr[j] ', digitsArr[j]);
                    // console.log('newNumArr ', newNumArr);
                } else if (digitsArr[j] == 0 || digitsArr[j] == 1 || digitsArr[j] == 8) {
                    isAllRotated = true;
                    // console.log('digitsArr[j] ', digitsArr[j]);
                    // console.log('newNumArr ', newNumArr);
                    newNumArr.push(digitsArr[j]);
                } else {
                    isAllRotated = false;
                    break;
                }
            }
            // console.log('initialNumber ', initialNumber);
            // console.log('newNumArr ', newNumArr.join(''));
            if (isAllRotated == true && initialNumber != newNumArr.join('')) {
                // console.log('initialNumber ', initialNumber);
                // console.log('newNumArr ', newNumArr);
                count++;
            }
        } else {
            if (i == 2 || i == 5 || i == 6 || i == 9) {
                count++;
            }
        }
    }
    return count;
};

console.log(rotatedDigits(10)); // 4    [1, 10] : 2, 5, 6, 9.
console.log(rotatedDigits(857)); // 247
