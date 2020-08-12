/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let hashMap = {};
    let count = 0;
    let arr = [];
    for (let i = 0; i < chars.length; i++) {
        hashMap[chars[i]] = hashMap[chars[i]] ? ++hashMap[chars[i]] : 1;
    }

    Object.keys(hashMap).forEach(element => {
        // console.log('element', element);
        arr.push(element);
        if (hashMap[element] > 1) {
            while (hashMap[element] > 9) {
                let temp = hashMap[element] % 10; //2
                hashMap[element] = Math.floor(hashMap[element] / 10);
                arr.push(temp);
            }
            arr.push(String(hashMap[element]));
        }
    });
    // console.log('arr', arr);
    return arr.length;
};

console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c'])); // 6 because ["a","2","b","2","c","3"]
console.log(compress(['a'])); // 1
console.log(compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'])); // 4 because ["a","b","1","2"]
console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c'])); //  ["a","2","b","2","c","3"]
