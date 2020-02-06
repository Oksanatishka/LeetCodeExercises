// Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer.
// If necessary, the shifting should wrap around back to the beginning or end of the alphabet.

function caesar(str, num) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let arr = str.toLowerCase();
    let output = '';
    for (let i = 0; i < arr.length; i++) {
        let char = arr[i];
        if (alphabet.indexOf(char) === -1) {
            output += char;
            continue;
        }
        let index = alphabet.indexOf(char) + (num % 26);
        if (index > 25) {
            index -= 26;
        }
        if (index < 0) {
            index += 26;
        }
        output += str[i] === str[i].toUpperCase() ? alphabet[index].toUpperCase() : alphabet[index];
    }
    return output;
    //     let arr = [];
    //     for (let i = 0; i < str.length; i++) {
    //         if (str[i].match(/[A-Za-z]/g)) {
    //             let asciiCode = str.charCodeAt(i);

    //             let asciiCodeShifted = ascii(asciiCode, num);
    //             let finalChar = String.fromCharCode(asciiCodeShifted);
    //             arr.push(finalChar);
    //         } else {
    //             arr.push(str[i]);
    //         }
    //     }
    //     console.log(arr.join(''));
    // }

    // function ascii(code, num) {
    //     let rest = num % 26;
    //     let newCode = code + rest;
    //     if ((newCode <= 90 && newCode >= 65) || (newCode <= 122 && newCode >= 97)) {
    //         return newCode;
    //     } else if (newCode > 90) {
    //         return newCode - 90 + 65 - 1;
    //     } else if (newCode > 122) {
    //         return newCode - 122 + 97 + 1;
    //     } else if (newCode < 65) {
    //         return newCode + 90 - 65 - 1;
    //     } else if (newCode < 97) {
    //         return newCode + 122 - 97 + 1;
    //     }
}
console.log(caesar('I love JavaScript!', 100)); //"E hkra FwrwOynelp!"
console.log(caesar('I love JavaScript!', -100)); //"M pszi NezeWgvmtx!"

// linear time and space complexity.
