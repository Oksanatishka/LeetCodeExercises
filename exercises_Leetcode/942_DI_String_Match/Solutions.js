/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    var increase = 0;
    var decrease = S.length;
    var arr = [];
    // console.log('len ', decrease);
    for (var i = 0; i < S.length; i++) {
        if (S[i] == 'I') {
            arr.push(increase);
            increase++;
            if (i == S.length - 1) {
                arr.push(increase);
            }
        }

        if (S[i] == 'D') {
            arr.push(decrease);
            decrease--;
            if (i == S.length - 1) {
                arr.push(decrease);
            }
        }
    }
    return arr;
};

console.log(diStringMatch('IDID')); // [0,4,1,3,2]
console.log(diStringMatch('III')); // [0,1,2,3]
console.log(diStringMatch('DDI')); // [3,2,0,1]
