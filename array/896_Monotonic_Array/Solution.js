/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    var result = false;
    if (A.length == 2 || A.length == 1) {
        result = true;
    }
    for (var i = 0; i < A.length - 1; i++) {
        if (A[0] > A[1]) {
            if (A[i] >= A[i + 1]) {
                result = true;
            } else {
                result = false;
                break;
            }
        }
        if (A[0] < A[1]) {
            if (A[i] <= A[i + 1]) {
                result = true;
            } else {
                result = false;
                break;
            }
        }
        if (A[0] == A[1]) {
            if (A.length == 2) {
                result = true;
            }
            for (var f = i + 1; f < A.length - 1; f++) {
                if (A[i] == A[f]) {
                    result = true;
                } else {
                    if (A[f] > A[f - 1]) {
                        if (A[f] >= A[f + 1]) {
                            result = true;
                        } else {
                            result = false;
                            break;
                        }
                    }
                    if (A[f] < A[f - 1]) {
                        if (A[f] <= A[f + 1]) {
                            result = true;
                        } else {
                            result = false;
                            break;
                        }
                    }
                }
            }
        }
    }
    return result;
};

console.log(isMonotonic([1, 2, 2, 3])); //true
console.log(isMonotonic([6, 5, 4, 4])); //true
console.log(isMonotonic([1, 3, 2])); //false
console.log(isMonotonic([2, 2, 2, 1, 4, 5])); //false
console.log(isMonotonic([1, 1, 1])); //true
console.log(isMonotonic([1, 1])); //true
console.log(isMonotonic([1, 1, 0])); //true
console.log(isMonotonic([9])); //true
