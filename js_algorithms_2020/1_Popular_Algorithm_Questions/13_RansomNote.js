// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

function ransomNote(str, magazine) {
    let obj = {};
    str.split(' ').map(word => {
        obj[word] = obj[word] ? obj[word] + 1 : 1;
    });

    let obj2 = {};
    magazine.split(' ').map(word => {
        obj2[word] = obj2[word] ? obj2[word] + 1 : 1;
    });

    for (let word in obj) {
        if (obj[word] <= obj2[word]) {
            continue;
        } else {
            return false;
        }
    }
    return true;

    // const noteWords = str.split(' ');
    // let possible = true;

    // noteWords.forEach(word => {
    //     if (obj2[word]) {
    //         obj2[word]--;
    //         if (obj2[word] < 0) possible = false;
    //     } else possible = false;
    // });

    return possible;
}

console.log(ransomNote('sit ad est sint', magazine)); //true
console.log(ransomNote('sit ad est love', magazine)); //false
console.log(ransomNote('sit ad est sint in in', magazine)); //true
console.log(ransomNote('sit ad est sint in in in in', magazine)); //false

// constant time
