function isPalindrome(s) {
    let newS = s.toLowerCase();
    let arr = [];
    for (let i = 0; i < newS.length; i++) {
        if ((newS[i] >= 'a' && newS[i] <= 'z') || (newS[i] >= '0' && newS[i] <= '9')) {
            arr.push(newS[i]);
        }
    }
    // console.log('arr ', arr);
    let arrCopy = arr;
    // console.log('arrCopy ', arrCopy);

    // console.log("arr.join('') ", arr.join(''));
    // console.log("arrCopy.reverse().join('') ", arrCopy.reverse().join(''));
    return arr.join('') === arrCopy.reverse().join('');
}

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome('0P')); // false
