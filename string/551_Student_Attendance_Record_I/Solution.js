/**
 * @param {string} s
 * @return {boolean}
 */

// 'A' : Absent.
// 'L' : Late.
// 'P' : Present.
// A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

var checkRecord = function(s) {
    let arr = s.split('');
    let hashMap = {};

    for (let i = 0; i < arr.length; i++) {
        hashMap[arr[i]] = hashMap[arr[i]] ? ++hashMap[arr[i]] : 1;
    }
    // console.log(hashMap);
    // console.log('hashMap["A"] ', hashMap['A']);
    // console.log('s.match(/L{2,}/g) ', s.match(/L{3,}/g));
    if (hashMap['A'] > 1 || s.match(/L{3,}/g) != null) {
        return false;
    }
    return true;
};

console.log(checkRecord('PPALLP')); //true
console.log(checkRecord('PPALLL')); //false
console.log(checkRecord('LALL')); //true
