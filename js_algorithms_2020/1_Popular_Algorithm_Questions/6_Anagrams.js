// Anagrams are words or phrases that contain the same number of characters. Create a function that checks for this.

// !! remove all non-alphabetic characters from the input strings
// !! make the remainder all lowercase.

function isAnagram(str1, str2) {
    let str1Obj = {};
    let str2Obj = {};

    // console.log(str1.replace(/\W/g, '').toLowerCase());
    for (let char in str1) {
        // str1.replace(/\W/g, "").toLowerCase()
        str1Obj[str1[char]] = str1Obj[str1[char]] + 1 || 1;
    }
    for (let char in str2) {
        str2Obj[str2[char]] = str2Obj[str2[char]] + 1 || 1;
    }
    // console.log(str1Obj); // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
    // console.log(str2Obj); // { w: 1, o: 2, r: 1, l: 3, d: 1, ' ': 1, h: 1, e: 1 }

    // let arr1 = [];
    // let arr2 = [];

    // for (let key in str1Obj) {
    //     arr1.push({ char: key, value: str1Obj[key] });
    // }
    // for (let key in str2Obj) {
    //     arr2.push({ char: key, value: str2Obj[key] });
    // }

    // arr1 = arr1.sort((a, b) => {
    //     if (a.char > b.char) return 1;
    //     else if (b.char > a.char) return -1;
    //     return 0;
    // });

    // arr2 = arr2.sort((a, b) => {
    //     if (a.char > b.char) return 1;
    //     else if (b.char > a.char) return -1;
    //     return 0;
    // });

    // return JSON.stringify(arr1) === JSON.stringify(arr2);

    if (Object.keys(str1Obj).length !== Object.keys(str1Obj).length) return false;
    for (let char in str1Obj) {
        if (str1Obj[char] !== str2Obj[char]) {
            return false;
        }
    }
    return true;
}
console.log(isAnagram('hello world', 'world hello')); // true
console.log(isAnagram('hellow world', 'hello there')); // false
console.log(isAnagram('hellow world', 'hello there!')); // false

// time complexity: linear
// space complexity is constant.

// In Big-O notation:
// Constant: O(1)
// Logarithmic: O(log n)
// Linear: O(n)
// Linearithmic: O(n log n)
// Quadratic: O(n²)
// Expontential: O(2^n)
// Factorial: O(n!)
