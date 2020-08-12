/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    if (name === typed) {
        return true;
    }
    if (name.length > typed.length) {
        return false;
    }

    let i = 0;
    let j = 0;
    while (i < name.length && j < typed.length) {
        if (name[i] == typed[j]) {
            i++;
        }
        j++;
    }
    return i === name.length;
};

console.log(isLongPressedName('alex', 'aaleex')); //true
console.log(isLongPressedName('saeed', 'ssaaedd')); //false
console.log(isLongPressedName('leelee', 'lleeelee')); //true
console.log(isLongPressedName('laiden', 'laiden')); //true
console.log(isLongPressedName('xnhtq', 'xhhttqq')); //false
console.log(isLongPressedName('kikcxmvzi', 'kiikcxxmmvvzz')); //false
