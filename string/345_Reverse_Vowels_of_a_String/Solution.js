/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let tempArr = [];
    for (let i = 0; i < s.length; i++) {
        if (
            s[i] == 'a' ||
            s[i] == 'e' ||
            s[i] == 'o' ||
            s[i] == 'u' ||
            s[i] == 'i' ||
            s[i] == 'A' ||
            s[i] == 'E' ||
            s[i] == 'O' ||
            s[i] == 'U' ||
            s[i] == 'I'
        ) {
            tempArr.push(s[i]);
        }
    }
    // console.log(tempArr);
    let k = tempArr.length - 1;
    let newStr = [];
    for (let i = 0; i < s.length; i++) {
        if (
            s[i] == 'a' ||
            s[i] == 'e' ||
            s[i] == 'o' ||
            s[i] == 'u' ||
            s[i] == 'i' ||
            s[i] == 'A' ||
            s[i] == 'E' ||
            s[i] == 'O' ||
            s[i] == 'U' ||
            s[i] == 'I'
        ) {
            // console.log('[k] ', k);
            newStr[i] = tempArr[k];
            // console.log('newStr ', newStr);
            // console.log('tempArr[k] ', tempArr[k]);
            k--;
        } else {
            newStr[i] = s[i];
        }
    }

    return newStr.join('');
};

console.log(reverseVowels('hello')); // "holle"
console.log(reverseVowels('leetcode')); // "leotcede"
console.log(reverseVowels('aA')); // "Aa"
