/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let hashMap = {};
    let magazineArr = magazine.split('');

    for (let i = 0; i < magazineArr.length; i++) {
        hashMap[magazineArr[i]] = hashMap[magazineArr[i]] ? ++hashMap[magazineArr[i]] : 1;
    }
    // console.log('hashMap', hashMap);
    let ransomNoteArr = ransomNote.split('');
    for (let i = 0; i < ransomNote.length; i++) {
        if (!hashMap[ransomNote[i]]) {
            return false;
        } else {
            hashMap[ransomNote[i]]--;
        }
    }
    return true;
};

console.log(canConstruct('a', 'b')); // false
console.log(canConstruct('aa', 'ab')); // false
console.log(canConstruct('aa', 'aab')); // true
