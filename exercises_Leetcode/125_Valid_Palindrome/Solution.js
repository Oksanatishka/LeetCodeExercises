/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var stackOfLetters = [];
    var reversed = '';
    var sWithoutSpaces = '';

    var lowerCaseStr = s.toLowerCase();

    for (var i = 0; i < lowerCaseStr.length; i++) {
        if (
            (lowerCaseStr[i] >= 'a' && lowerCaseStr[i] <= 'z') ||
            (lowerCaseStr[i] >= '0' && lowerCaseStr[i] <= '9')
        ) {
            stackOfLetters.push(lowerCaseStr[i]);
        }
    }
    var sWithoutSpaces = stackOfLetters.join('');

    var len = stackOfLetters.length;
    for (var i = 0; i < len; i++) {
        reversed += stackOfLetters.pop();
    }
    // console.log('reversed ', reversed);

    var i = 0;
    while (i < sWithoutSpaces.length) {
        if (sWithoutSpaces.charAt(i) == reversed.charAt(i)) {
            i++;
        } else {
            return false; // is not palindrome
        }
    }
    return true; // is palindrome
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); //true
console.log(isPalindrome('race a car')); //false
