/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    // let hashMap = {
    //     a: '.-',
    //     b: '-...',
    //     c: '-.-.',
    //     d: '-..',
    //     e: '.',
    //     f: '..-.',
    //     g: '--.',
    //     h: '....',
    //     i: '..',
    //     j: '.---',
    //     k: '-.-',
    //     l: '.-..',
    //     m: '--',
    //     n: '-.',
    //     o: '---',
    //     p: '.--.',
    //     q: '--.-',
    //     r: '.-.',
    //     s: '...',
    //     t: '-',
    //     u: '..-',
    //     v: '...-',
    //     w: '.--',
    //     x: '-..-',
    //     y: '-.--',
    //     z: '--..'
    // };
    let hashMap = {};
    let arr = [
        '.-',
        '-...',
        '-.-.',
        '-..',
        '.',
        '..-.',
        '--.',
        '....',
        '..',
        '.---',
        '-.-',
        '.-..',
        '--',
        '-.',
        '---',
        '.--.',
        '--.-',
        '.-.',
        '...',
        '-',
        '..-',
        '...-',
        '.--',
        '-..-',
        '-.--',
        '--..'
    ];
    let j = 0;
    for (let i = 'a'; i <= 'z'; i++) {
        hashMap[i] = arr[j];
        j++;
    }
    console.log('hashMap ', hashMap);
    let wordsMap = {};
    for (let i = 0; i < words.length; i++) {
        let transformedWord = [];
        for (let j = 0; j < words[i].length; j++) {
            transformedWord.push(hashMap[words[i][j]]);
        }
        // wordsMap[i] = hashMap[j]
        // transformedWord.join('');
        // console.log('transformedWord ', transformedWord.join(''));
        let finalTransformedWord = transformedWord.join('');
        wordsMap[finalTransformedWord] = wordsMap[finalTransformedWord]
            ? ++wordsMap[finalTransformedWord]
            : 1;
    }
    // console.log('wordsMap ', wordsMap);
    return Object.keys(wordsMap).length;
};

console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg'])); // 2
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations, "--...-." and "--...--.".
