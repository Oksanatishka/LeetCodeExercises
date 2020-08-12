/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    // let i = 1;
    // let initialA = A;

    // if (B.includes(A) == false && A.includes(B) == false) {
    //     A = A.concat(initialA);
    //     if (A.includes(B) == false) {
    //         return -1;
    //     } else {
    //         i++;
    //         return i;
    //     }
    // }

    // while (A.includes(B) == false && i < 10000) {
    //     A = A.concat(initialA);
    //     i++;
    // }
    // if (A.includes(B) == true) {
    //     return i;
    // } else {
    //     return -1;
    // }

    //---------------------- Another way to solve ---------

    // let i = 1;
    // while (i < A.length + B.length) {
    //     if (A.repeat(i).includes(B)) {
    //         return i;
    //     }
    //     i++;
    // }
    // return -1;

    const count = Math.ceil(B.length / A.length);
    const str = A.repeat(count);
    return str.includes(B) ? count : (str + A).includes(B) ? count + 1 : -1;
};

console.log(repeatedStringMatch('abcd', 'cdabcdab')); // 3    “abcdabcdabcd”
console.log(repeatedStringMatch('abcabcabcabc', 'abac')); // -1    “abcdabcdabcd”
console.log(repeatedStringMatch('aaaaaaaaaaaaa', 'abababaabababaabababa')); // -1
console.log(repeatedStringMatch('aaaaaaaaaaaaaaaaaaaaaab', 'ba')); // 2
console.log(repeatedStringMatch('abcd', 'abcdb')); // -1
