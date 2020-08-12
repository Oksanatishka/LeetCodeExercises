/**
 * @param {string} S
 * @return {string}
 */

// If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
// If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.

var toGoatLatin = function(S) {
    let finalArr = [];
    let arrS = S.split(' ');
    // console.log('arrS ', arrS);
    for (let i = 0; i < arrS.length; i++) {
        let wordArr = arrS[i].split('');
        // console.log('wordArr ', wordArr);
        for (let j = 0; j < wordArr.length; j++) {
            let aChar = 'a'.repeat(i + 1);
            if (
                j == 0 &&
                (wordArr[j] == 'a' ||
                    wordArr[j] == 'e' ||
                    wordArr[j] == 'i' ||
                    wordArr[j] == 'o' ||
                    wordArr[j] == 'u' ||
                    wordArr[j] == 'A' ||
                    wordArr[j] == 'E' ||
                    wordArr[j] == 'I' ||
                    wordArr[j] == 'O' ||
                    wordArr[j] == 'U')
            ) {
                wordArr.push('ma', aChar);
            } else if (j == 0) {
                let firstChar = wordArr.shift();
                let aChar = 'a'.repeat(i + 1);
                wordArr.push(firstChar, 'ma', aChar);
            }
        }
        // console.log('wordArr ', wordArr);
        finalArr.push(wordArr.join(''));
    }

    return finalArr.join(' ');
};

console.log(toGoatLatin('I speak Goat Latin')); // "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
console.log(toGoatLatin('The quick brown fox jumped over the lazy dog')); // "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
